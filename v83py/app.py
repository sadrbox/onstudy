import win32com.client
import pythoncom
import asyncio
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import JSONResponse
from concurrent.futures import ThreadPoolExecutor
import sqlite3

app = FastAPI()

# Инициализация базы данных
def init_db():
    conn = sqlite3.connect("data_cache.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS UsersData (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            Name TEXT,
            PhysicalPerson TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    conn.close()

# Сохранение данных в базу
def save_data_to_db(data):
    conn = sqlite3.connect("data_cache.db")
    cursor = conn.cursor()
    for item in data:
        cursor.execute("""
            INSERT INTO UsersData (Name, PhysicalPerson)
            VALUES (?, ?)
        """, (item["Наименование"], item["ФизЛицо"]))
    conn.commit()
    conn.close()

# Получение кэшированных данных
def get_cached_data():
    conn = sqlite3.connect("data_cache.db")
    cursor = conn.cursor()
    cursor.execute("SELECT Name, PhysicalPerson FROM UsersData ORDER BY timestamp DESC LIMIT 10")
    rows = cursor.fetchall()
    conn.close()
    return [{"Наименование": row[0], "ФизЛицо": row[1]} for row in rows]

# Функция для выполнения запроса
def execute_query():
    try:
        # Инициализация COM для текущего потока
        pythoncom.CoInitialize()

        # Создаем COM-объект
        com_connector = win32com.client.Dispatch("V83.COMConnector")
        
        # Параметры подключения
        connection_string = "Srvr='server';Ref='_transition';Usr='support';Pwd='MasterPass123';"
        session = com_connector.Connect(connection_string)
        
        # Выполнение запроса
        query_text = """
        ВЫБРАТЬ
            Наименование КАК Наименование,
            ЕСТЬNULL(ФизЛицо.Наименование, "") КАК ФизЛицо
        ИЗ
            Справочник.Пользователи
        """ 
        query = session.NewObject("Query")
        query.Text = query_text
        result = query.Execute()

        if not result:
            return {"message": "Запрос не вернул результатов."}

        rows = result.Unload()
        result_list = []
        for row in rows:
            user = {
                "Наименование": row.Get(0),
                "ФизЛицо": row.Get(1)
            }
            result_list.append(user)

        # Сохраняем результат в базе данных
        save_data_to_db(result_list)

        return result_list
    except Exception as e:
        return {"error": str(e)}
    finally:
        pythoncom.CoUninitialize()

# Обработчик WebSocket
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    # Возвращаем последние кэшированные данные
    cached_data = get_cached_data()
    await websocket.send_json(cached_data)

    # Выполняем запрос в фоновом режиме
    loop = asyncio.get_event_loop()
    with ThreadPoolExecutor() as pool:
        result = await loop.run_in_executor(pool, execute_query)
    
    # Отправляем новый результат обратно клиенту
    await websocket.send_json(result)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Сервер работает!"}

@app.get("/ws")
def not_websocket():
    return {"message": "Это не WebSocket, а обычный HTTP!"}
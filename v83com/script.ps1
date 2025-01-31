try {
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8

    $comConnector = New-Object -ComObject "V83.COMConnector"

    # Параметры подключения
    $connectionString = "Srvr='server';Ref='_transition';Usr='support';Pwd='MasterPass123';"
    $session = $comConnector.Connect($connectionString)

    # Выполнение запроса
    $queryText = '
    ВЫБРАТЬ
        Наименование КАК Наименование,
        ЕСТЬNULL(ФизЛицо.Наименование, "") КАК ФизЛицо
    ИЗ
        Справочник.Пользователи
    '
    $query = $session.NewObject("Query")
    $query.Text = $queryText
    $result = $query.Execute()

    if ($result -eq $null) {
        @{ message = "Запрос не вернул результатов." } | ConvertTo-Json
        return
    }

    # Перебор строк результата
    $rows = $result.Unload()
    $arr = @()
    foreach ($item in $rows) {
  
        $user = [PSCustomObject]@{
            "Наименование" = $item.Get(0)
            "ФизЛицо"      = $item.Get(1)
        }
        $arr += $user
    }

    # Возвращаем результат в формате JSON
    $arr | ConvertTo-Json -Depth 2
} catch {
    @{ error = $_.Exception.Message } | ConvertTo-Json
}

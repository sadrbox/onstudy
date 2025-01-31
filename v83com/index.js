const express = require("express");
const { execFile } = require("child_process");

const app = express();
const PORT = 3000;

// Endpoint для выполнения PowerShell-скрипта
app.get("/api/users", (req, res) => {
	const scriptPath = "./script.ps1";

	// Запуск PowerShell-скрипта
	execFile(
		"powershell",
		["-NoProfile", "-ExecutionPolicy", "Bypass", "-File", scriptPath],
		(error, stdout, stderr) => {
			if (error) {
				console.error(`Ошибка выполнения скрипта: ${stderr}`);
				return res.status(500).json({ error: "Ошибка выполнения скрипта" });
			}

			try {
				// Парсим JSON-результат из PowerShell
				const data = JSON.parse(stdout);
				res.json(data);
			} catch (parseError) {
				console.error(`Ошибка парсинга JSON: ${parseError}`);
				res.status(500).json({ error: "Ошибка парсинга JSON" });
			}
		}
	);
});

app.listen(PORT, () => {
	console.log(`Сервер запущен на http://localhost:${PORT}`);
});

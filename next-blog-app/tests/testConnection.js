// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../prisma/generated/client";
const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("Connection to the database successful.");

    // Тут вы можете выполнить дополнительные проверки или запросы
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Вызовите функцию для проверки подключения
testConnection();

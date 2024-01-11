import Image from "next/image";
import { Box } from "@mui/material";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Page({ users }: any) {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users &&
          users.map((user: any) => {
            <li key={user.id}>{user.username}</li>;
          })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const users = await prisma.v8users.findMany();
  return {
    props: { users },
  };
}

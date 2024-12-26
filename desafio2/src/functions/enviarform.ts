import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default async function adicionar(nome: any, email: any){

    const pessoa = await prisma.usuario.create(
        {
            data:{
                name: nome,
                email: email
            }
        }
    )

}

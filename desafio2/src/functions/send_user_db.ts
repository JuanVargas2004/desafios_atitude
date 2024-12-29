import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function send_user(name: string, email: string, password: string){
    
    await prisma.user_credentials.create({
        data:{
            name: name,
            email: email,
            password: password
        }
    })
}
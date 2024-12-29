import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()


export default async function find_email(email: string){
    
    const user = await prisma.user_credentials.findUnique({
        where: {
            email: email
        }
    })

    return user
}
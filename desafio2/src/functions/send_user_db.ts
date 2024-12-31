import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function send_user(name: string, email: string, cpf: string, password: string){
    
    await prisma.user_credentials.create({
        data:{
            name: name,
            email: email,
            cpf: cpf,
            password: password
        }
    })

    await prisma.personal_data.create({
        data:{
            name: name,
            dateOfBirth: new Date('2024-01-01'),
            gender: 'MALE',
            cpf: '',
            phone: '',
            email: email,
            nationality: '',
            maritalStatus: 'SINGLE'
        }
    })
}
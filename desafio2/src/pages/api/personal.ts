import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/functions/prismaClient';

export default async function send_personal(req: NextApiRequest, res: NextApiResponse){

    if (req.method === "POST"){

        const {id, name, date, gender, cpf, phone, email, nationality, maritalStatus} = req.body

        try {
            if (name){
                await prisma.personal_data.update({
                    where: {
                        id: id
                    },
                    data:{
                        name: name
                    }
                })

                await prisma.user_credentials.update({
                    where: {
                        id: id
                    },
                    data:{
                        name: name
                    }
                })
            }

            if (date){
                await prisma.personal_data.update({
                    where: {
                        id: id
                    },
                    data:{
                        dateOfBirth: new Date(date)
                    }
                })
            }

            if (gender){
                await prisma.personal_data.update({
                    where: {
                        id: id
                    },
                    data:{
                        gender: gender
                    }
                })
            }

            if (cpf){
                await prisma.personal_data.update({
                    where: {
                        id: id
                    },
                    data:{
                        cpf: cpf
                    }
                })

                await prisma.user_credentials.update({
                    where: {
                        id: id
                    },
                    data:{
                        cpf: cpf
                    }
                })
            }

            if (phone){
                await prisma.personal_data.update({
                    where: {
                        id: id
                    },
                    data:{
                        phone: phone
                    }
                })
            }


            if (email){
                await prisma.personal_data.update({
                    where: {
                        id: id
                    },
                    data:{
                        email: email
                    }
                })

                await prisma.user_credentials.update({
                    where: {
                        id: id
                    },
                    data:{
                        email: email
                    }
                })
            }


            if (nationality){
                await prisma.personal_data.update({
                    where: {
                        id: id
                    },
                    data:{
                        nationality: nationality
                    }
                })
            }


            if (maritalStatus){
                await prisma.personal_data.update({
                    where: {
                        id: id
                    },
                    data:{
                        maritalStatus: maritalStatus
                    }
                })
            }

            res.status(200).json({message: 'Sucess'})

        } catch (e) {
            res.status(500).json({message: 'Data error'})
            console.error(e)
        }

    } else {
        res.setHeader('Allow', ['POST'])
        res.status(404).json({message: 'Method not allowed'})
    }

}

// const payload = {name, date, gender, cpf, phone, email, nationality, maritalStatus}
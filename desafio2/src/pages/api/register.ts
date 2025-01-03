import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/functions/prismaClient'

export default async function register(req: NextApiRequest, res: NextApiResponse){
    if (req.method === "POST"){

        const {name, cpf, email, password} = req.body

        if (name && cpf && email && password){

            try {

                await prisma.user_credentials.create({
                    data: {
                        name: name, 
                        cpf: cpf, 
                        email: email, 
                        password: password
                    }
                })

                res.status(200).json({message: 'Sucess'})

            } catch (e) {

                res.status(500).json({message: 'Data error'})

            }


        } else {
            
            res.status(400).json({message: 'Missing fields'})

        }
        
    } else {
        
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: 'Method not allowed'})

    }
}
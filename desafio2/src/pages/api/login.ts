import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/functions/prismaClient'
import jwt from 'jsonwebtoken'

const SECRET_KEY = String(process.env.SECRET_KEY)
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if (req.method === "POST"){

        const {email, password} = req.body

        if (email && password){
            
            try {


                const user = await prisma.user_credentials.findFirst({
                    where: {
                        email: email
                    }
                })

                if (user) {

                    if (password == user.password){

                        const id = user.id
                        const name = user.name

                        const payload = {id, name, email, password}
                    
                        const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'})

                        res.setHeader('Set-Cookie', `token=${token}; Path=/; Max-Age=3600`)
                        res.status(200).json({message: 'Sucess'})

                    } else {

                        res.status(401).json({message: 'Invalid credentials'})
                    
                    }
                    
                    
                } else {
                    res.status(401).json({message: 'Invalid credentials'})
                }

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
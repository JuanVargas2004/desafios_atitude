import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/functions/prismaClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    
    if (req.method === 'POST'){
        
        const {email, password, confirmPassword} = req.body

        if (email && password && confirmPassword){

            if (password == confirmPassword){

                try {

                    const user = await prisma.user_credentials.findUnique({
                        where: {
                            email: email
                        }
                    })

                    if (user) {

                        try {

                            await prisma.user_credentials.delete({
                                where: {
                                    email: email
                                }
                            })

                            await prisma.personal_data.delete({
                                where: {
                                    email: email
                                }
                            })

                            res.status(200).json({message: 'Sucess'})


                        } catch (e) {
                            res.status(500).json({message: 'Internal Server Error'})
                        }
                    
                    } else {
                        res.status(402).json({message: 'Email not found'})
                    }

                } catch (e) {
                    res.status(500).json({message: 'Internal Server Error'})
                }

            } else {
                res.status(401).json({message: 'Passwords do not match'})
            }

        } else {
            res.status(400).json({message: 'Missing fields'})
        }
        

    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: 'Method not allowed'})
    }

}
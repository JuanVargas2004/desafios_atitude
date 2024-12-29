import { NextApiRequest, NextApiResponse } from 'next';
import login from '@/functions/logging';
import jwt from 'jsonwebtoken';

const SECRET_KEY = String(process.env.SECRET_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { email, password } = req.body

    if (req.method === "POST"){

        if (email && password){

            const user = await login(email)

            if (user){
                if(password == user.password){

                    const name = user.name

                    const payload = {email, name}

                    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'})

                    res.setHeader('Set-Cookie', `token=${token}; Path=/; Max-Age=900; HttpOnly;`)

                    res.status(200).json({message: "Sucess", email: email, password: password})

                } else {

                    res.status(404).json({message: "Credenciais Inválidas"})
                }

            } else {

                res.status(404).json({message: "Credenciais Inválidas"})
            }

        } else {

            res.status(400).json({message: "Email e senha são obrigatórios"})
        }

    } else {

        res.setHeader("Allow", ["POST"])
        res.status(405).end(`Método ${req.method} não permitido`)
        
    }

}
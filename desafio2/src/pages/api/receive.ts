import send_user from '@/functions/send_user_db';
import { NextApiResponse, NextApiRequest } from 'next';

interface ResponseData{
    message?: string,
    name?: String,
    email?: string,
    password?: string,
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>){
    
    const {name, email, password } = req.body;

    if (req.method == 'POST'){

        if (name && email && password){

            await send_user(name, email, password)


            res.status(200).json({
                message: "Success",
                name: String(name),
                email: String(email),
                password: String(email),
            })

        }

    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Método ${req.method} não permitido`)

    }

}
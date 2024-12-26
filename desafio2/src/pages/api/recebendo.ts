import { NextApiResponse, NextApiRequest } from "next";

interface ResponseData {
    message: string
    name?: string
    email?: string
}


export default function handler (req: NextApiRequest, res: NextApiResponse<ResponseData>){
    const {nome} = req.body
    const {email} = req.body

    if (req.method === "POST"){

        if (nome){
            res.status(200).json({
                message: "Nome recebido com sucesso!",
                name: String(nome),
                email: String(email)
            })
            console.log(`\n\n\t Nome recebido com sucesso: ${nome} \t\n\n`)
            console.log(`\n\n\t Email recebido com sucesso: ${email} \t\n\n`)
        
        } else {
            res.status(400).json({
                message: "Nenhum nome foi recebido."
            })
        }

    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Método ${req.method} não permitido`)

    }

}
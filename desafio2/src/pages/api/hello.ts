import type { NextApiRequest, NextApiResponse } from "next";

interface ResponseData  {
    message: string
    param1?: string
    param2?: string
}


// MODELO DE REQUISIÇÃO GET
// https://localhost:3000/api/{NOME_ARQUIVO}?/{PARAMETRO}={VALOR_PARAMETRO}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const { param1, param2 } = req.query;

    if (param1 && param2) {
        res.status(200).json({
            message: "Parâmetros recebidos com sucesso!",
            param1: String(param1),
            param2: String(param2),
            
        });

        console.log(`\n\n\t\t${param1}\t\t\n\n`)
        console.log(`\n\n\t\t${param2}\t\t\n\n`)
    } 
    
    else {
        res.status(400).json({
            message: "Faltam parâmetros na requisição!",
        });
    }
}
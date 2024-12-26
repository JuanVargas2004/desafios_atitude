'use client'
import { useState } from "react"

export default function Formulario(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')


    const handleSubmit = async (event: any) => {
        
        event.preventDefault(); // Evita da página carregar ao enviar
        
        try {

            const response = await fetch('/api/recebendo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email }),
            })

            const data = await response.json()
            console.log(data)

        } catch (err) {

            console.error(err)

        }


    }

    return (

        <div className="w-screen h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-4">
                
                <div>
                    Nome: <input type="text" 
                                 name="nome" 
                                 id="nome" 
                                 value={nome}
                                 onChange={(e) => setNome(e.target.value)}
                                 placeholder="Digite aqui seu nome"
                                 className="text-slate-900 px-2" 
                                 />
                </div>

                <div>
                    Email: <input type="email" 
                                 name="email" 
                                 id="email" 
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 placeholder="Digite aqui seu email"
                                 className="text-slate-900 px-2" 
                                 />
                </div>

                <button type="submit" className="bg-gray-400">Enviar</button>
            </form>
        </div>

    )
}
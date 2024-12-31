'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Login(){
    
    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const payload = {email, password}


    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        const response = await fetch('api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if (response.ok) {
            alert("Logado com Sucesso!")
            router.push('welcome/')
        } else if (response.status === 400) {
            alert("Preencha todos os campos.")
        } else if (response.status === 300) {
            alert("E-mail ou senha inválidos.")
        } else if (response.status === 500) {
            alert("Erro interno")
        } else {
            alert("Falha ao tentar logar. Tente novamente.")
        }
    }

    return (
        <div className="h-screen flex items-center justify-center">

            <form onSubmit={handleSubmit} method="POST" className="bg-gray-900 px-12 py-9 rounded-3xl">

                <h1 className="text-center text-2xl font-medium mb-8">Login</h1>

                <div className="flex flex-col gap-3">

                    <div className="container_input_form">
                        <label htmlFor="email">E-mail:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="Digite seu e-mail"
                            className="input_form"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                    <div className="container_input_form">
                        <label htmlFor="password">Senha:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Digite sua senha"
                            className="input_form"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>

                    <div className="flex justify-center">
                        <input 
                            type="submit" 
                            value="Enviar"
                            className="button_form bg-green-600 active:bg-green-800 mt-3"
                            />
                    </div>

                    <h2 className="text-center text-[.8rem] text-[#d4d4d4] mt-4">
                        Ainda não possuí conta? Registre-se <Link href={'register/'} className="text-green-400 active:text-green-600">aqui</Link>
                    </h2>


                </div>

            </form>


        </div>
    )
}
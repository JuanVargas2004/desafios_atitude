'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

export default function Register(){

    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter()
    
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const payload = {name, cpf, email, password}

    
    useEffect(() => {
        setIsMounted(true)
    }, [])
    
    if(!isMounted){
        return null
    }



    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        
        const response = await fetch('api/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if (response.ok){
            
            alert('Cadastro realizado com sucesso')
            router.push('/')

        } else if (response.status === 400) {
            alert('Preencha todos os campos')

        } else if (response.status === 500) {
            alert('Credenciais já existentes')
        } else {
            alert('Ocorreu um erro ao realizar o cadastro')
        }

    }

    return (
        <div className="h-screen flex items-center justify-center">

            <form onSubmit={handleSubmit} method="POST" className="bg-gray-900 px-12 py-9 rounded-3xl">

                <h1 className="text-center text-2xl font-medium mb-8">Registro</h1>

                <div className="flex flex-col gap-3">

                    <div className="container_input_form">
                        <label htmlFor="name">Nome:</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            placeholder="Digite seu nome"
                            className="input_form"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div className="container_input_form">
                        <label htmlFor="cpf">CPF:</label>
                        <input 
                            type="text" 
                            name="cpf" 
                            id="cpf"
                            placeholder="Digite seu cpf"
                            className="input_form"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            />
                    </div>
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
                        Já possuí conta? Entre <Link href={'/'} className="text-green-400 active:text-green-600">aqui</Link>
                    </h2>


                </div>

            </form>


        </div>
    )
}
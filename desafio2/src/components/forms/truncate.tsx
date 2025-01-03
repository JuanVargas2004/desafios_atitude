'use client'
import { IconArrowNarrowLeft } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Cookies from 'js-cookie'

export default function Truncate(){
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const payload = {email, password, confirmPassword}

    const handleSubmit = async (event: React.FormEvent) => {
        
        event.preventDefault()

        const response = await fetch('/api/delete',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }
        )

        if (response.ok) {
            alert('Conta excluída com sucesso')

            Cookies.remove('token')
            router.push('/')


        } else if (response.status === 400) {
            alert('Preencha todos os campos corretamente')
        } else if (response.status === 401) {
            alert('Senhas não conferem')
        } else if (response.status === 402) {
            alert('Usuário não encontrado')
        } else {
            alert('Um erro inesperado aconteceu')
        }

    }

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            

            <div className='w-full ml-[700px]'>
                <IconArrowNarrowLeft
                    size={65}
                    className='transition ease hover:scale-110 active:text-[#7a7a7a] cursor-pointer'
                    onClick={() => {router.push('/welcome/')}}
                />
            </div>


            <form onSubmit={handleSubmit} method="POST" className="bg-gray-900 px-12 py-9 rounded-3xl">

                <h1 className="text-center text-2xl font-medium mb-8">Deletar Conta</h1>

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
                    <div className="container_input_form">
                        <label htmlFor="password">Confirmar Senha:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Digite sua senha novamente"
                            className="input_form"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                    </div>

                    <div className="flex justify-center">
                        <input 
                            type="submit" 
                            value="Enviar"
                            className="button_form bg-green-600 active:bg-green-800 mt-3"
                            />
                    </div>



                </div>

            </form>


        </div>
    )
}
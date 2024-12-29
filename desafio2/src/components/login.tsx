'use client'
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent) => {
        
        event.preventDefault();

        try {

            const response = await fetch('api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password})
            })


            if (response.ok) {
                router.push('register/');
            } else {
                alert("Credenciais inválidas");
            }


        } catch (err) {
            console.error(err)
            alert("Ocorreu um erro ao registrar.")
        }
    }


    return (

        <div className="flex h-screen justify-center items-center">

            <form onSubmit={handleSubmit} method="post" name="register" className="bg-gray-900 px-12 py-16 rounded-3xl">

                <p className="text-center text-2xl font-medium mb-8">Login</p>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                        <label htmlFor="email">E-mail: </label>
                        <input type="email"
                                name="email"
                                placeholder="Digite seu E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="text-black px-2 py-1"/>
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="password">Senha: </label>
                        <input type="password"
                                name="password"
                                placeholder="Digite sua Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="text-black px-2 py-1"/>
                    </div>
                </div>

                <div className="flex justify-center mt-5">
                    <input type="submit" value="Enviar"
                           className="bg-green-700 px-2 py-1 rounded-md cursor-pointer active:bg-green-900 hover:scale-[1.05] transition ease"/>
                </div>

                <p className="mt-5 text-xs">Não possui uma conta? Registre seus dados <Link className="text-green-500 active:text-green-700" href="register/">aqui</Link></p>
            
            </form>

        </div>

    )
    
}
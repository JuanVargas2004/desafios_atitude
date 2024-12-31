'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from 'js-cookie'

export default function Welcome(){
    
    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setIsMounted(true)
    })

    if (!isMounted){
        return null
    }

    const handleQuit = () => {
        Cookies.remove('token')
        router.refresh()
    }

    return(

        <div className="h-screen flex flex-col items-center justify-center gap-2">

            <h1 className="text-3xl">Olá, <b>Usuário</b>!</h1>
            <h1 className="text-2xl italic mb-4">O que deseja acessar?</h1>

            <Link href={'forms/personal'} className="flex justify-center">
                <input 
                    type="submit" 
                    value="Dados Pessoais"
                    className="button_form bg-green-600 active:bg-green-800 w-40"
                />
            </Link>
            
            {/* <Link href={'/'} className="flex justify-center">
                <input 
                    type="submit" 
                    value="Dados Residenciais"
                    className="button_form bg-purple-600 active:bg-purple-800 w-40"
                />
            </Link> */}

            {/* <Link href={'/'} className="flex justify-center">
                <input 
                    type="submit" 
                    value="Dados Acadêmicos"
                    className="button_form bg-blue-600 active:bg-blue-800 w-40"
                />
            </Link> */}

            {/* <Link href={'/'} className="flex justify-center">
                <input 
                    type="submit" 
                    value="Dados Emergências"
                    className="button_form bg-red-600 active:bg-red-800 w-40"
                />
            </Link> */}
            

            <div onClick={handleQuit} className="flex justify-center">
                <input 
                    type="submit" 
                    value="Sair"
                    className="button_form bg-red-500 active:bg-red-700 mt-5"
                />
            </div>
            
        </div>

    )
}
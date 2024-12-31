'use client'
import Link from "next/link";
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";
import jwt from 'jsonwebtoken'

export default function Welcome() {

    var username = ''

    const router = useRouter()

    const handleDisconnect = () => {
        Cookies.remove('token')
        router.refresh()

    }

    const token = Cookies.get('token')
    
    if (token){

        const decode = jwt.decode(token)

        if (decode && typeof decode === 'object'){

            username = decode.name
        }

        
    } else {
        Cookies.remove('token')
        router.refresh()
    }


    return (
        <div className="h-screen flex flex-col items-center justify-center gap-5">
            
            <div className="flex flex-col items-center">
                <h1 className="text-3xl mb-2">Olá, <b>{username}</b>!</h1>
                <h2 className="text-2xl">O que deseja fazer?</h2>
            </div>
            
            <div className="flex flex-col ">

                <Link href={'/personal/'}>
                    <div className="bg-green-800 px-2 py-1 rounded-xl mb-3 text-center hover:scale-105 transition active:bg-green-950">
                        Dados Pessoais
                    </div>
                </Link>
                
                <Link href={'/'}>
                    <div className="bg-blue-800 px-2 py-1 rounded-xl mb-3 text-center hover:scale-105 transition active:bg-blue-950">
                        Dados Residenciais
                    </div>
                </Link>

                <Link href={'/'}>
                    <div className="bg-purple-800 px-2 py-1 rounded-xl mb-3 text-center hover:scale-105 transition active:bg-purple-950">
                        Dados Acadêmicos
                    </div>
                </Link>

                <Link href={'/'}>
                    <div className="bg-red-800 px-2 py-1 rounded-xl mb-3 text-center hover:scale-105 transition active:bg-red-950">
                        Dados Emergênciais
                    </div>
                </Link>

                <div onClick={handleDisconnect} className="bg-red-600 px-2 py-1 rounded-xl mt-7 text-center hover:scale-105 transition active:bg-red-700 cursor-pointer">
                    Desconectar
                </div>

            </div>
        </div>
    );
} 
'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from "react";
import jwt from 'jsonwebtoken'

interface childrenProps{
    children: ReactNode
}

const SECRET_KEY = String(process.env.SECRET_KEY)

export default function ProtectedLayout({children}: childrenProps){

    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter()

    useEffect( () => {
        setIsMounted(true)

        const token = Cookies.get('token')

        if (!token){
            router.push('/')

        } else {

            try {
                const decode = jwt.decode(token)
            
                if (decode && typeof decode === 'object' && decode.exp){

                    const expiration = decode.exp * 1000

                    if (expiration < Date.now()){
                        Cookies.remove('token')
                        router.push('/')
                    }

                } else {
                    Cookies.remove('token')
                    router.push('/')
                }


            } catch (e) {
                console.error(e)
            }
            

        }

    })

    if (!isMounted){
        return null
    }


    return (
        <div>{children}</div>
    )

}
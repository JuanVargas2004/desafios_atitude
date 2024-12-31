'use client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import jwt from 'jsonwebtoken'
import { useEffect } from 'react'

const SECRET_KEY = String(process.env.SECRET_KEY)

export default function teste({children}: any){

    const token = Cookies.get("token")
    const router = useRouter()

    useEffect(() => {

        if (!token){
            router.push('/')
        } else {
    
            try {
                
               const decode = jwt.decode(token, {complete: true})
               
    
               // Faz a verificação de tempo de validade do token
    
               if (!decode){
                    Cookies.remove('token')
                    router.push('/')
               }
    
               else {
                    const payload = decode.payload
    
                    if (typeof payload === 'object' && payload.exp){
    
                        const expiration = payload.exp * 1000
    
                        if (expiration < Date.now()) {
                            Cookies.remove('token')
                            router.push('/')
                        }
    
                    } else {
                        Cookies.remove('token')
                        router.push('/')
                    }
               }
    
    
               // Verificação se o token foi alterado
    
               jwt.verify(token, SECRET_KEY, (err, decode) => {
                    if (err){
                        console.log(err)
                        Cookies.remove('token')
                        router.push('/')
                    }
               })
    
            } catch (error) {
                console.error(error)
            }
    
        }
    

    })

    
    return(
        <div>
            <div>{children}</div>
        </div>
    )
}
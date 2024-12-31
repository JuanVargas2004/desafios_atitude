'use client'

import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Personal(){

    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter()

    useEffect( () => {
        setIsMounted(true)
    })

    if (!isMounted){
        return null
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            
            <div className='w-full ml-[700px]' onClick={() => {router.back()}}>
                <IconArrowNarrowLeft
                    size={65}
                    className='transition ease hover:scale-110 active:text-[#7a7a7a] cursor-pointer'
                />
            </div>


            <form>

                <div className="flex flex-col gap-3">


                    <div className="container_input_form">
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" id="name" className="input_form" placeholder="Digite aqui seu Nome"/>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="dateOfBirth">Data de Nascimento:</label>
                        <input type="date" id="dateOfBirth" className="input_form"/>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="gender">Gênero:</label>
                        <select id="gender" className="input_form">
                            <option value="MALE">Masculino</option>
                            <option value="FEMALE">Feminino</option>
                            <option value="OTHER">Outro</option>
                            <option value="PREFER_NOT_TO_SAY">Prefiro não dizer</option>
                        </select>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" className="input_form" placeholder="Digite seu CPF"/>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="phone">Telefone:</label>
                        <input type="text" id="phone" className="input_form" placeholder="Digite seu Telefone"/>
                    </div>
                    
                    <div className="container_input_form">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" className="input_form" placeholder="Digite seu Email"/>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="nationality">Nacionalidade:</label>
                        <input type="text" id="nationality" className="input_form" placeholder="Digite sua Nacionalidade"/>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="maritalStatus">Estado Civil:</label>
                        <select id="maritalStatus" className="input_form">
                            <option value="SINGLE">Solteiro(a)</option>
                            <option value="MARRIED">Casado(a)</option>
                            <option value="DIVORCED">Divorciado(a)</option>
                            <option value="WIDOWED">Viúvo(a)</option>
                            <option value="OTHER">Outro</option>
                        </select>
                    </div>

                    <div className="flex justify-center mt-5">
                        <input type="submit" value="Enviar"
                            className="bg-green-700 px-2 py-1 rounded-md cursor-pointer active:bg-green-900 hover:scale-[1.05] transition ease"/>
                    </div>


                </div>

            </form>

        </div>
    )

}
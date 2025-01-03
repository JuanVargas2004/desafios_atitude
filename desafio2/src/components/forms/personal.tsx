'use client'

import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export default function Personal(){

    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter()


    const token = Cookies.get('token')
    if (token){
        const decode = jwt.decode(token)
        if (decode && typeof decode === 'object'){
            var id = decode.id
        }
    }


    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('MALE')
    const [cpf, setCpf] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [nationality, setNationality] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('SINGLE')

    const payload = {id, name, date, gender, cpf, phone, email, nationality, maritalStatus}

    useEffect( () => {
        setIsMounted(true)
    })

    if (!isMounted){
        return null
    }


    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault()

        const response = await fetch('/api/personal', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if (response.ok){
            alert('Dados Atualizados com Sucesso')
        } else if (response.status == 500) {
            alert('Houve um erro ao atualizar os dados')
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


            <form onSubmit={handleSubmit} method="POST">

                <div className="flex flex-col gap-3">


                    <div className="container_input_form">
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" id="name" className="input_form" placeholder="Digite aqui seu Nome" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="dateOfBirth">Data de Nascimento:</label>
                        <input type="date" id="dateOfBirth" className="input_form" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="gender">Gênero:</label>
                        <select id="gender" className="input_form" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="MALE">Masculino</option>
                            <option value="FEMALE">Feminino</option>
                            <option value="OTHER">Outro</option>
                            <option value="PREFER_NOT_TO_SAY">Prefiro não dizer</option>
                        </select>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" className="input_form" placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="phone">Telefone:</label>
                        <input type="text" id="phone" className="input_form" placeholder="Digite seu Telefone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    
                    <div className="container_input_form">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" className="input_form" placeholder="Digite seu Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="nationality">Nacionalidade:</label>
                        <input type="text" id="nationality" className="input_form" placeholder="Digite sua Nacionalidade" value={nationality} onChange={(e) => setNationality(e.target.value)}/>
                    </div>

                    <div className="container_input_form">
                        <label htmlFor="maritalStatus">Estado Civil:</label>
                        <select id="maritalStatus" className="input_form" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
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
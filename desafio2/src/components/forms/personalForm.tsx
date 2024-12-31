'use client'
import { useRouter } from 'next/navigation';
import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { useState } from 'react';

export default function Personal(){
    
    const router = useRouter()

    function handleBack() {
        router.back()
    }


    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('MALE')
    const [cpf, setCpf] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [nationality, setNationality] = useState('')
    const [status, setStatus] = useState('SINGLE')


    async function handleSubmit(event: React.FormEvent){
        event.preventDefault()

        try{
            const response = await fetch('api/send_personal', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({name, date, gender, cpf, phone, email, nationality, status})
            })


        } catch (err){
            console.error(err)
        }
    }

    
    return(
        <div className=" h-screen flex flex-col justify-center items-center">

            <div className='w-full'>
                <button onClick={handleBack} className='mx-36 p-'>
                    <IconArrowNarrowLeft
                        size={50}
                        className='transition hover:scale-110'
                    />
                </button>
            </div>

            <div>
                <form onSubmit={handleSubmit}>

                    <div className="flex flex-col gap-3">

                        <div className="container_input">
                            <label htmlFor="name">Nome Completo:</label>
                            <input type="text" id="name" className="input" placeholder="Digite aqui seu Nome" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    

                        <div className="container_input">
                            <label htmlFor="dateOfBirth">Data de Nascimento:</label>
                            <input type="date" id="dateOfBirth" className="input" value={date} onChange={(e) => setDate(e.target.value)}/>
                        </div>

                        
                        <div className="container_input">
                            <label htmlFor="gender">Gênero:</label>
                            <select id="gender" className="input" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="MALE">Masculino</option>
                                <option value="FEMALE">Feminino</option>
                                <option value="OTHER">Outro</option>
                                <option value="PREFER_NOT_TO_SAY">Prefiro não dizer</option>
                            </select>
                        </div>

                        <div className="container_input">
                            <label htmlFor="cpf">CPF:</label>
                            <input type="text" id="cpf" className="input" placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                        </div>
                        
                        <div className="container_input">
                            <label htmlFor="phone">Telefone:</label>
                            <input type="text" id="phone" className="input" placeholder="Digite seu Telefone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>

                        
                        <div className="container_input">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" className="input" placeholder="Digite seu Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        
                        <div className="container_input">
                            <label htmlFor="nationality">Nacionalidade:</label>
                            <input type="text" id="nationality" className="input" placeholder="Digite sua Nacionalidade" value={nationality} onChange={(e) => setNationality(e.target.value)}/>
                        </div>


                        <div className="container_input">
                            <label htmlFor="maritalStatus">Estado Civil:</label>
                            <select id="maritalStatus" className="input" value={status} onChange={(e) => setStatus(e.target.value)}>
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

        </div>
    )
}
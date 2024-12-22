'use client'

import { useState } from "react"
import { IconChartBar, IconGraph } from '@tabler/icons-react'
import propsCard from "@/interfaces/card"
import Input from "./input"

export default function Card(props:propsCard){

    const [percentual, setPercentual] = useState(props.percentual ?? 100)
    const [total, setTotal] = useState(props.total ?? 0)

    function changePercent(){
        const novo_valor = document.querySelector("#percentId").value

        if (novo_valor){
            setPercentual(parseInt(novo_valor))
        }
    }

    function changeTotal(){
        const novo_valor = document.querySelector("#totalId").value
        
        if (novo_valor){
            setTotal(parseInt(novo_valor))
        }
    }
    
    

    return (

        <div id="card" className="h-screen w-screen flex flex-col justify-center items-center">
            
            <div className="bg-[#212b35] h-36 w-96 p-3 rounded-3xl flex justify-between items-center space">
                
                <div className="flex flex-col justify-center items-center">
                
                    <h1 className="italic font-bold text-[.9rem] text-[#999EA2] mb-4">Total de Usuários Ativos</h1>

                    <div className="flex gap-2">
                        <IconGraph className="text-[#45A33D]" size={22}></IconGraph>
                        <p className="mb-4 text-[#A3A7AB]">{percentual}%</p>
                    </div>
                    
                    <p className="font-bold text-[1.3rem]">{total}</p>

                </div>
                
                <IconChartBar className="text-[#137149] mr-5" size={30}></IconChartBar>
                
            </div>



            <div className="flex gap-4 items-center mt-5">
                <input id="percentId" type="number" placeholder="Mudar a porcentagem..." className="bg-[#212b35] p-[5px] rounded-xl"/>

                <button onClick={changePercent} className="bg-red-800 px-[7px] py-[3px] rounded-2xl">Enviar Valor</button>
            </div>




            <div className="flex gap-4 items-center mt-4">
                <input id="totalId" type="number" placeholder="Mudar o total..." className="bg-[#212b35] p-[5px] rounded-xl"/>

                <button onClick={changeTotal} className="bg-red-800 px-[7px] py-[3px] rounded-2xl">Enviar Valor</button>
            </div>

        </div>
    )

}
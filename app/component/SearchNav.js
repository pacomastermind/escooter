'use client'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchNav(){
    const router = useRouter()
    const [text, setText] = useState("")

    useEffect (
         ()=>{
            //console.log(text)
            router.push('/scooter?precio='+text)
         },[text,router]
    )

    return(
        <ul className="nav contFiltro justify-content-end contPrincipal pt-3 pb-1 pe-2 text-bg-dark">
        <li className="nav-item">
            <div className="row text-bg-dark">
                <label forhtml="inputPrecio" className="col col-form-label text-end">Precio maximo</label>
                <div className="col">
                    <input 
                    value={text}
                    className="form-control" 
                    onChange={e => setText(e.target.value)}
                    id="inputPrecio"/>
                </div>
            </div>
        </li>
    </ul>        
    )
}
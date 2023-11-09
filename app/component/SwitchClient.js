'use client'
import { useState,useEffect } from 'react'
import {useTheme} from 'next-themes'

export default function SwitchClient(){
    const { theme, setTheme } = useTheme()

    //Inicializacion
    useEffect(() => {
        setTheme('light')
      }, [])

    //Cambio de tema
    const cambiaTema = ()=>{
        setTheme(theme=='dark'?'light':'dark')
        console.log('cambio tema a '+theme)
    }


    return(
        <div className="form-check form-switch">
            <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={cambiaTema}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Tema oscuro
            </label>
        </div>    
    )
}
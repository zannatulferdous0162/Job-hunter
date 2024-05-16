import React, { useEffect, useState } from 'react';

const LightDark = () => {
    const [templete,setTemplete]=useState(localStorage.getItem('dark')==="dark")

    const Dark=()=>{
        localStorage.setItem('dark','dark')
        console.log("dark")
       
       
    }
    const Light=()=>{
        localStorage.removeItem('dark')
        console.log("")
        setTemplete(false)
        
    }
    useEffect(() => {
        const isDark = localStorage.getItem('dark') === "dark";
        setTemplete(isDark);
    }, []);
    return{
        templete, 
        Dark ,
        Light
    }
};

export default LightDark;
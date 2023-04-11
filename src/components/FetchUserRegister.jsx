import React, { useEffect, useState } from "react";

export function FetchUserRegister(){
        console.log("entra")
   
        const userRegister = () =>{
                
            const data= {
                username:"messi",
                email:"messi@gmail.com",
                password:"12345678",
                roles:["user"]
            }
            useEffect(() => {
                console.log("entra efecto")
            fetch('http://localhost:8080/api/auth/signup',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin':'*'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json()).then(json =>{
                if(res.state === 200){
                    alert("success")
                }
                console.log(res.state)
            }).catch(e => {
                console.log(e+"from userRegister")
            })
        })
        }


    return(
        <h3>hola desde userregister</h3>
    )


}

export default FetchUserRegister();
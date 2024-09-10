import { useState } from "react";
import Kesinti from "./kesinti";


export default function Home() {

    const {no,setNumber}= useState(1);


    console.log(no);
    
    return <div> <p>Burasi Home Page !</p>
        <p> <Kesinti isim="Ahmet" /> </p>

        <button onClick={() => {
            
           
            
        }}>
            Arttir

        </button>

        <p> {no}</p>



    </div>
}
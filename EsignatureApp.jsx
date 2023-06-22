import React, { useState } from 'react';
import Title from '../components/Title';

export default function EsignatureApp() {
    const [name,setName] = useState("");
    const [date,setDate] = useState("");

    const onChangeDateHandler = (e) => {
        setDate(e.target.value);
    }
    const onChangeNameHandler = (e) => {
        setName(e.target.value);
       }
    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: ".35rem 0",
    };
   
    return(
        <div className='container text-center'>
        <Title classes={"title"} text={name}/>
        <Title classes={"main-title mb-4"} text={date}/>
        <p className='paragraph'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
           Sequi eveniet saepe quis magnam consequatur fuga? Dolore, quasi 
           odit cumque, modi distinctio voluptates quae voluptatum mollitia 
           dolorum, architecto eligendi alias sunt.Lorem ipsum sit amet consectetur adipisicing elit. 
           Sequi eveniet saepe quis magnam consequatur fuga? Dolore, quasi 
           odit cumque, modi distinctio voluptates quae voluptatum mollitia 
           dolorum, architecto eligendi alias sunt.sit amet consectetur adipisicing elit. 
           Sequi eveniet saepe quis magnam consequatur fuga? Dolore, quasi 
           odit cumque, modi distinctio voluptates quae voluptatum mollitia 
           dolorum, architecto eligendi alias sunt.sit amet consectetur adipisicing elit. 
           Sequi eveniet saepe quis magnam consequatur fuga? Dolore, quasi 
           odit cumque, modi distinctio voluptates quae voluptatum mollitia 
           dolorum, architecto eligendi alias sunt.sit amet consectetur adipisicing elit. 
           Sequi eveniet saepe quis magnam consequatur fuga? Dolore, quasi 
           odit cumque, modi distinctio voluptates quae voluptatum mollitia 
           dolorum, architecto eligendi alias.
        </p>
        <footer className="d-flex"
        style={{
            justifyContent: "space-around",
            position: "relative",
            top: "40vh",
        }

        }
        >
        <input type="date" value={date} style={inputStyle} onChange={onChangeDateHandler}/>
        <input type="text" value={name} style={inputStyle} onChange={onChangeNameHandler}/>
        </footer>
        
        </div>
    );
}
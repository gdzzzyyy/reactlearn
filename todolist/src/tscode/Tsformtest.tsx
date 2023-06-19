//ReactのFormコンポーネント練習
import React  from "react";
import ReactDOM from 'react-dom';

function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        
};

function handleSubmit(event:React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
};

function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
  
};

function Tsformtest() {
    return (
        <div>
            <p>
                hello typescript 
            </p>
        </div>    
    );
}

export default Tsformtest;

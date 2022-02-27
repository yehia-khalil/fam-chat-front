import axios from 'axios';
import React, { useState } from 'react'

export default function MsgInput() {
    let [message, setMessage] = useState('');
    let changeMessage = async (value) => {
        await setMessage(value);
        console.log(message);
    }
    let sendMessage= ()=>{
        axios.post("")
    }
    return (
        <div>
            <input type="text" onChange={(e) => changeMessage(e.target.value)} />
            <button type="button" className="btn btn-primary" >Send</button>
        </div>
    )
}

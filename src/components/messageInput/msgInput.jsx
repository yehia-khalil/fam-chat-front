import axios from 'axios';
import React, { useState } from 'react'
import { getCookie } from '../../helpers/Helpers';
import {
    useParams,
} from "react-router-dom";

export default function MsgInput() {
    let { receiverId } = useParams();
    let [message, setMessage] = useState('');
    let changeMessage = (value) => {
        setMessage(value);
        console.log(message);
    }
    let sendMessage = () => {
        axios.post(process.env.REACT_APP_REMOTE_HOST + '/message', {
            'receiver_id': receiverId,
            message
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie()}`
            }
        }).then(response => {
            console.log(response);
        })
    }
    return (
        <div>
            <input type="text" onChange={(e) => changeMessage(e.target.value)} />
            <button type="button" className="btn btn-primary" onClick={sendMessage}>Send</button>
        </div>
    )
}

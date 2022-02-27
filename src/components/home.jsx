import { useEffect, useState } from 'react';
import { Redirect, useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import MsgInput from './messageInput/msgInput';

function Home({ getCookie }) {
    let match = useRouteMatch();

    return (
        <div>
            {(!localStorage.getItem("user") && !getCookie()) && <Redirect to='/login'></Redirect>}

            <MsgInput/>
        </div>
    )
}

export default Home;

import { useEffect, useState } from 'react';
import { Redirect, useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import MsgInput from './messageInput/msgInput';
import Container from './sidePanel/Container'
import { getCookie } from '../helpers/Helpers'

function Home() {
    let match = useRouteMatch();
    return (
        <div>
            {(!localStorage.getItem("user") && !getCookie()) && <Redirect to='/login'></Redirect>}

            {/* <MsgInput getCookie={getCookie}/> */}
            <div>
                <Container />
            </div>
        </div>
    )
}

export default Home;

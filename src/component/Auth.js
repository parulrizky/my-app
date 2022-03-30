import Login from "./Login";
import Search from "./Search";
import './Track.css';

import queryString from 'query-string';
import { useState, useEffect } from 'react';

const Auth = () => {
    const [accessToken, setAccessToken] = useState("");
    useEffect(() => {
        const parsed = queryString.parse(window.location.hash);
        setAccessToken(parsed.access_token);
    }, [])

    if (accessToken !== undefined) {
        return (
            <Search accessToken = {accessToken} />
        )
    }
    else {
        return (
            <Login />
        )
    }
}

export default Auth;
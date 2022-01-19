import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import loadable from '@loadable/component';
import Channel from "@pages/Channel";

const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LogIn></LogIn>} />
            <Route path="/login" element={<LogIn></LogIn>} />
            <Route path="/signup" element={<SignUp></SignUp>} />
            <Route path="/workspace/channel" element={<Channel></Channel>} />
        </Routes>
    );
}

export default App;

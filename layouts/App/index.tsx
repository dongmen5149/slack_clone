import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import loadable from '@loadable/component';

const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LogIn></LogIn>} />
            <Route path="/login" element={<LogIn></LogIn>} />
            <Route path="/signup" element={<SignUp></SignUp>} />
            <Route path="/workspace/:workspace/*" element={<Workspace></Workspace>} />
        </Routes>
    );
}

export default App;

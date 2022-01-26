import ChatBox from "@components/Chatbox";
import ChatList from "@components/ChatList";
import useInput from "@hooks/useInput";
import React, { useCallback, VFC } from "react";
import { Container, Header } from "./styles";

const Channel = () => {
    const [chat, onChangeChat] = useInput('');

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
    }, []);

    return (
        <Container>
            <Header>
                채널
            </Header>
            <ChatList />
            <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
        </Container>
    )
}

export default Channel
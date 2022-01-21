import fetcher from "@utils/fetcher";
import axios from "axios";
import React, { FC, useCallback, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import useSWR from "swr";
import { RightMenu, Header, ProfileImg, Channels, WorkspaceName, Chats, MenuScroll, WorkspaceWrapper, Workspaces, ProfileModal, LogOutButton } from "./styles";
import gravatar from 'gravatar'
import DirectMessage from "@pages/DirectMessage";
import Channel from "@pages/Channel";
import Menu from "@components/Menu";

const Workspace: FC = ({ children }) => {
    const { data, error, mutate } = useSWR('/api/users', fetcher);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const onLogout = useCallback(() => {
        axios
            .post("/api/users/logout ", null, {
                withCredentials: true,
            })
            .then(() => {
                mutate(false, false)
            })
    }, [])

    const onClickUserProfile = useCallback(() => {
        setShowUserMenu((prev) => !prev)
    }, [])

    const onCloseUserProfile = useCallback((e) => {
        e.stopPropagation();
        setShowUserMenu(false);
    }, []);

    if (!data) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header>
                <RightMenu>
                    <span onClick={onClickUserProfile}>
                        <ProfileImg src={gravatar.url(data.nickname, { s: '28px', d: 'retro' })} alt={data.nickname} />
                        {showUserMenu && (
                            <Menu style={{ right: 0, top: 38 }} show={showUserMenu} onCloseModal={onCloseUserProfile}>
                                <ProfileModal>
                                    <img src={gravatar.url(data.nickname, { s: '36px', d: 'retro' })} alt={data.nickname} />
                                    <div>
                                        <span id="profile-name">{data.nickname}</span>
                                        <span id="profile-active">Active</span>
                                    </div>
                                </ProfileModal>
                                <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
                            </Menu>
                        )}
                    </span>
                </RightMenu>
            </Header>
            <WorkspaceWrapper>
                <Workspaces>test</Workspaces>
                <Channels>
                    <WorkspaceName>Sleack</WorkspaceName>
                    <MenuScroll>MenuScroll</MenuScroll>
                </Channels>
                <Chats>
                    <Routes>
                        <Route path="/workspace/channel" element={<Channel></Channel>} />
                        <Route path="/workspace/dm" element={<DirectMessage></DirectMessage>} />
                    </Routes>
                </Chats>
            </WorkspaceWrapper>
        </div>
    )
}

export default Workspace;
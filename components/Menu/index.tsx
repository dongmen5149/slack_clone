import React, { CSSProperties, FC, useCallback } from "react";
import { CloseModalButton, CreateMenu } from "./styles";

interface Props {
    show: boolean;
    onCloseModal: (e: any) => void;
    style: CSSProperties;
    closeButton?: boolean;
}
const Menu: FC<Props> = ({ children, style, show, onCloseModal, closeButton }) => {

    const stopProPagation = useCallback((e) => {
        e.stopProPagation();
    }, []);


    return (
        <CreateMenu onClick={onCloseModal}>
            <div style={style} onClick={stopProPagation}>
                {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
                {children}
            </div>
        </CreateMenu>
    )
}

export default Menu
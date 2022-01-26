import React, { CSSProperties, FC, useCallback } from "react";
import { CloseModalButton, CreateMenu } from "./styles";

interface Props {
    show: boolean;
    onCloseModal: (e: any) => void;
    style: CSSProperties;
    closeButton?: boolean;
}
const Menu: FC<Props> = ({ children, style, show, onCloseModal, closeButton }) => {

    const preventDefault = useCallback((e) => {
        e.preventDefault();
    }, []);

    if (!show) return null;

    return (
        <CreateMenu onClick={onCloseModal}>
            <div style={style} onClick={preventDefault}>
                {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
                {children}
            </div>
        </CreateMenu>
    )
}

Menu.defaultProps = {
    closeButton: true,
};

export default Menu
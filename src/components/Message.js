import React from 'react';
import styled from "styled-components";

function Message({ message, user, timestamp, userImage }) {
    return <MessageContainer>
        <img src={userImage} alt="user" />
        <MessageInfo>

        </MessageInfo>
    </MessageContainer>
}

export default Message;

const MessageContainer = styled.div``;
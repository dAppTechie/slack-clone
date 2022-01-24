import React from 'react';
import styled from "styled-components";

function Message({ message, user, timestamp, userImage }) {
    return <MessageContainer>
        <img src={userImage} alt="user" />
        <MessageInfo>
            <h4>
                {user}{' '}
                <span>{new Date(timestamp?.toDate()).toLocaleString()}</span>
            </h4>
            <p>{message}</p>
        </MessageInfo>
    </MessageContainer>
}

export default Message;

const MessageContainer = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: white;
    img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-right: 1rem;
    }
`;

const MessageInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
        font-size: 1.2rem;
        font-weight: bold;
        span {
            font-size: 0.8rem;
            color: #aaa;
        }
    }
    p {
        font-size: 1rem;
        margin-top: 0.5rem;
    }
`;
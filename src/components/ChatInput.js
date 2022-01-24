import React, { useState } from 'react';

import { Button } from '@material-ui/core';
import styled from 'styled-components';
import {db} from "../firebase";
import firebase from "firebase/compat/app";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Chad',
      userImage: 'https://via.placeholder.com/150'
    });

    setInput('');

  };

  return (
    <ChatInputContainer>
      <form>
        <input value={input} placeholder={`Message #${channelName}`} onChange={(e) => setInput(e.target.value)} />

        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;

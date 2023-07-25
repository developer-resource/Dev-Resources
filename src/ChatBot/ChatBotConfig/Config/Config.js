// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../../Widget/Avatar";

const Config = {
    botName: 'Developer Resources',
    initialMessages: [
        createChatBotMessage(`Hi, Welcome to Developer Resource! How can i help you?`),
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        }
    },
    customComponents: {
        botAvatar: props => <BotAvatar {...props} />,
    },
}

export default Config
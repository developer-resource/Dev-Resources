import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { Config, MessageParser, ActionProvider } from './ChatBotConfig'

const ChatBot = () => {
    return (
        <Chatbot
            config={Config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
        />
    )
}

export default ChatBot
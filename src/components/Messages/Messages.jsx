import { CameraIcon } from "../../icons";
import "./Messages.css";
import { useState, useEffect } from "react";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        fetch('https://api.npoint.io/061bd62a0256913b93dd').
            then(res => res.json()).
            then((data) => setMessages(data.messageList));
    }, [])

    return (
        <div className="messages">
            Messagi
            {
                messages.map(conv => (
                    <div className="conversation">
                        <div>
                            <img src={conv.participants[1].avatar_url}></img>
                        </div>
                        <div>
                            <p>{conv.participants[1].username}</p>
                            <div>
                                <p>{conv.messages[conv.messages.length-1].content}</p>
                                <p>{conv.last_message_timestamp}</p>
                            </div>
                            
                        </div>
                        <div>
                            <CameraIcon/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Messages;
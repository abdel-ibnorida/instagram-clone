import { CameraIcon } from "../../icons";
import "./Messages.css";
import { useState, useEffect } from "react";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [section, setSection] = useState('messages');
    const [chatName, setChatName] = useState('');
    useEffect(() => {
        fetch('https://api.npoint.io/061bd62a0256913b93dd').
            then(res => res.json()).
            then((data) => setMessages(data.messageList));
    }, [])

    const handleSection = () => {
        switch (section) {
            case  "messages":
                return (
                    <div className="messages">
                        <p className="name_section">Messagi</p>
                        {
                            messages.map(conv => (
                                <div className="conversation">
                                    <div className="conversation_avatar">
                                        <img src={conv.participants[1].avatar_url}></img>
                                    </div>
                                    <div className="conversation_info_container" onClick={()=> handelSingleConvInfo(conv.participants[1].username)}>
                                        <div className="conversation_recipient">{conv.participants[1].username}</div>
                                        <div className="conversation_text_container">
                                            <p className="conversation_text">{conv.messages[conv.messages.length - 1].content}</p>
                                            <p className="conversation_lastTime">{conv.last_message_timestamp}</p>
                                        </div>

                                    </div>
                                    <div className="conversation_camera">
                                        <CameraIcon />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                );
            case  "conversation":
                return(
                    <>
                    <button onClick={()=>setSection("messages")}> X </button>
                    </>
                );

        }

    }

    const handelSingleConvInfo = (name) => {
        setSection("conversation");
        setChatName(name);
        console.log(name);
    }

    return (
        <>
            {handleSection()};
        </>
    )
}

export default Messages;
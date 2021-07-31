import { useEffect, useState } from "react";
import ChatBox from "../ChatBox";
import AddFriend from "../AddFriend";
import Welcome from "../Welcome";
import socket from "../../socket";

const useHandleContentPage = () => {
    const [whichComponentContent, setWhichComponentContent] = useState('welcome');
    const [friendId, setFriendId] = useState(null);
    const [friendChatInf, setFriendChatInf] = useState({
        userName: '...',
        img: '',
        isOnline: false
    });


    let contentComponent;

    const handleComponentContent = (e, component) => {
        e.preventDefault();
        setWhichComponentContent(component);
    }

    const handleChatBoxComponentWithFriendInf = (e, component, id) => {
        e.preventDefault();
        setWhichComponentContent(component);
        setFriendId(id);
    }

    

    useEffect(() => {
        socket.emit('friendlyRelationship:getFriendInf', {
            id: friendId
        }, (res) => {
            if (res.success) {
                setFriendChatInf(() => ({
                    userName: res.success.userName,
                    img: res.success.img,
                    isOnline: res.success.isOnline
                }))
            }
        });
    }, [friendId, friendChatInf]);

    switch (whichComponentContent) {
        case 'add_friend':
            contentComponent = <AddFriend/>
            break;
        case 'chat_box':
            contentComponent = <ChatBox 
            friendChatInf={friendChatInf}/>
            break;
        default:
            contentComponent = <Welcome/>
            break;
    }

    return [contentComponent, handleComponentContent, handleChatBoxComponentWithFriendInf];
}

export default useHandleContentPage;
import { useState } from "react";
import ChatBox from "../ChatBox";
import AddFriend from "../AddFriend";
import Welcome from "../Welcome";

const useHandleContentPage = () => {
    const [whichComponentContent, setWhichComponentContent] = useState('welcome');
    let contentComponent;

    const handleComponentContent = (e, component) => {
        e.preventDefault();
        setWhichComponentContent(component);
    }

    switch (whichComponentContent) {
        case 'add_friend':
            contentComponent = <AddFriend/>
            break;
        case 'chat_box':
            contentComponent = <ChatBox/>
            break;
        default:
            contentComponent = <Welcome/>
            break;
    }

    return [contentComponent, handleComponentContent];
}

export default useHandleContentPage;

import { useEffect, useState } from "react";

const useHandleGetFriendRequest = (socket, userEmail) => {
    const [friendRequests, setFriendRequests] = useState([]);
   
    useEffect(() => {
        socket.emit('notification:friendRequest', {
            userEmail: userEmail
        }, (res) => {
            setFriendRequests(res.eventMessage);
        });
    }, [friendRequests]);

    return [friendRequests];
}

export default useHandleGetFriendRequest;
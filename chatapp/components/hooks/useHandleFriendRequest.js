import { useEffect, useState } from "react";
import socket from "../../socket";

const useHandleFriendRequest = (userEmail) => {
    const [friendRequests, setFriendRequests] = useState([]);
    const [friendsByUser, setFriendsByUser] = useState([]);
   
    useEffect(() => {
        socket.emit('notification:friendRequest', {
            userEmail: userEmail
        }, (res) => {
            setFriendRequests(res.eventMessage);
        });
    }, [friendRequests]);

    const handleAcceptFriendRequest = (e, senderId, receiverId, notificationId) => {
        e.preventDefault()
        socket.emit('friendlyRelationship:acceptRequest', {
            senderId: senderId,
            receiverId: receiverId,
            notificationId: notificationId
        }, (res) => {
            console.log(res.eventMessage);
        });
    }

    useEffect(() => {
        socket.emit('friendlyRelationship:getFriendsByUser',{
            userEmail: userEmail
        }, (res) => {
            if (res.error) {
                console.log(res.error);
            } else if (res.success) {
                setFriendsByUser(res.success);
            }
        });
    }, [friendsByUser])

    return [friendRequests, handleAcceptFriendRequest, friendsByUser];
}

export default useHandleFriendRequest;
import dbConnect from '../models/dbConnect';
import FriendRequests from '../models/FriendRequest';

module.exports = (io, socket) => {

    const friendRequest = async (payload, callback) => {
        const userEmail = payload.userEmail;
        await dbConnect();

        try {
            const friendRequests = await FriendRequests.find({receiverId: userEmail});
            if (friendRequests) {
                callback({
                    eventMessage: friendRequests
                })
            }
        } catch (error) {
            callback({
                eventMessage: error
            })
        }
    } 

    socket.on('notification:friendRequest', friendRequest)
}
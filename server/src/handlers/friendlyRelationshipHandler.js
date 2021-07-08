import dbConnect from '../models/dbConnect';
import Users from '../models/User';
import MakeFriends from './utils/MakeFriends';
import FriendRequests from '../models/FriendRequest';

module.exports = (io, socket) => {
    const acceptRequest = async (payload, callback) => {
        const {senderId, receiverId} = payload;
        await dbConnect();

        const receiver = await Users.findOne({email: receiverId});
        const sender = await Users.findOne({email: senderId});
        
        if (!receiver || !sender) {
            callback({
                eventMessage: 'There was a problem, try again later.'
            });
        }

        try {
            const makeFriends = new MakeFriends();
            makeFriends.entitysWithNewFriend(sender, receiver);
            makeFriends.entitysWithNewFriend(receiver, sender);

            //await friendRequests.find()

            callback({
                eventMessage: 'success.'
            });
        } catch (error) {
            callback({
                eventMessage: error
            });
        }
    }

    const getFriendsByUser = async (payload, callback) => {
        await dbConnect();

        const user = await Users.find({email: payload.userEmail})

        if (!user) {
            callback({
                error: 'User no login'
            })
        }
        

        try {
            let friends = [];

            for (let i = 0; i < user[0].friends.length; i++) {
                const friendId = user[0].friends[i]._id;
                const friend = await Users.findOne({_id: friendId});
                friends.push(friend);
            }
    
            const friendsMap = friends.map((friend) => {
                return {
                    _id: friend._id,
                    userName: friend.userName,
                    email: friend.email,
                    img: friend.img,
                    isOnline: friend.isOnline,
                }
            });

            callback({
                success: friendsMap
            })
        } catch (error) {
            callback({
                error: error
            });
        }        
    }

    socket.on('friendlyRelationship:acceptRequest', acceptRequest)
    socket.on('friendlyRelationship:getFriendsByUser', getFriendsByUser)
}

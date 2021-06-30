import express from 'express';
import Users from './models/User';
import FriendRequests from './models/FriendRequest';
import dbConnect from './models/dbConnect';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is up and running')
});

router.post('/new_chat/?user', (req, res) => {
    
});

router.post('/new_user', async (req, res) => {
    const user = req.body;
    
    await dbConnect();

    const userHasBeenRegistered = await Users.findOne({email: user.email});

    if (!userHasBeenRegistered) {
        try {
            const newUser = await Users({
                userName: user.name,
                email: user.email,
                isOnline: true
            });

            newUser.save();
        
            res.status(200).send('User registered')
            
        } catch (error) {
            res.status(404).send(error);
        }
    }
});


router.post('/friend_request', async (req, res) => {
    const data = req.body;
    await dbConnect();

    if (data.receiverId === '') {
        return res.status(403).send('Introduce un email...');
    }

    const doesUserExist = await Users.findOne({email: data.receiverId});

    if (!doesUserExist) {
        return res.status(404).send('User doesn´t exist.');
    }

    const friendRequestExist = await FriendRequests.findOne({senderId: data.senderId, receiverId: data.receiverId});

    if (friendRequestExist) {
        return res.status(403).send('Friend request has been sent.');
    }

    try {
        const newNotification = new FriendRequests({
            senderId: data.senderId,
            senderName: data.senderName,
            senderImg: data.senderImg,
            receiverId: data.receiverId,
            isActive: true
        });
        
        if(newNotification) {
            newNotification.save();
            return res.status(200).send('Friend Request sended');
        }
    } catch (error) {
        return res.status(403).send('Something went wrong')
    }
});


module.exports = router;
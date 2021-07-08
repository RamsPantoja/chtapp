import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    chatName: String,
    messages: [
        {
            message: String,
            timeStamp: String,
            user: {
                displayName: String,
                email: String
            }
        }
    ],
    users: [String]
});

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    img: String,
    chats: [
        chatSchema
    ],
    friends: [
        {
            userName: String,
            email: String,
            imageUrl: String
        }
    ],
    isOnline: Boolean
});

export default mongoose.models.Users || mongoose.model('Users', userSchema);
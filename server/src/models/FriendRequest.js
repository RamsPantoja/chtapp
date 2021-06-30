import mongoose from 'mongoose';

const friendRequestSchema = new mongoose.Schema({
    senderId: String,
    senderName: String,
    senderImg: String,
    receiverId: String,
    isActive: Boolean
});


export default mongoose.models.FriendRequests || mongoose.model('FriendRequests', friendRequestSchema);
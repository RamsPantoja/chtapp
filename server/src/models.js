import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://RamsPantoja:Left4Dead2@devclosterrams.nodjj.mongodb.net/chatapp?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});


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
    chats: [
        chatSchema
    ],
    friends: [
        {
            userName: String,
            email: String,
            imageUrl: String
        }
    ]
});

export const Users = mongoose.model('users', userSchema);
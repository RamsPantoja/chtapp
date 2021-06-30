import mongoose from 'mongoose';

const dbConnect = async () => {
    let isConnected = false;

    if (mongoose.connection.readyState >= 1) {
        return;
    }

    mongoose.connect('mongodb+srv://RamsPantoja:Left4Dead2@devclosterrams.nodjj.mongodb.net/chatapp?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });


    const db = mongoose.connection;

    db.on('error', () => {
        console.log('connection error')
    });

    db.once('open', () => {
        console.log('We´re connected')
    })
}

export default dbConnect;
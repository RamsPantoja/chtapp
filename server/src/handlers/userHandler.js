import dbConnect from "../models/dbConnect";
import Users from '../models/User';

module.exports = (io, socket) => {
    const userConnected = async (data) => {
        await dbConnect();
        
        socket.data.userEmail = data.email;

        Users.findOneAndUpdate({email: data.email}, {
            isOnline: true
        }, (err, doc) => {
            if (err) {
                console.log(err)
            }
            
            if (doc) {
                console.log('User is online')
            }
        });
    }

    const onDisconnect = async () => {
        await dbConnect();

        Users.findOneAndUpdate({email: socket.data.userEmail}, {
            isOnline: false
        }, (err, doc) => {
            if (err) {
                console.log({error: 'Something went wrong'})
            } else {
                console.log('User is offline')
            }
        });
    }

    socket.on('user:connected', userConnected);
    socket.on('disconnect', onDisconnect)
}
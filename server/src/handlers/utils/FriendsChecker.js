import dbConnect from "../../models/dbConnect"
import Users from '../../models/User';

class FriendsChecker {
    constructor(sender, receiver) {
        this.sender = sender
        this.receiver = receiver
        this.areFriends = false
    }

    async alreadyAreFriends() {
        await dbConnect();

        const senderUser = await Users.findOne({email: this.sender});

        if (senderUser) {
            for (let i = 0; i < senderUser[0].friends.length; i++) {
                if (senderUser[0].friends[i].email === this.receiver) {
                    this.areFriends = true;
                    break;
                }
                
            }
        }

        return this.areFriends;
    }
}

export default FriendsChecker;
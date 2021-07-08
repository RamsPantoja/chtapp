class MakeFriends {
    entitysWithNewFriend(firstEntity, secondEntity) {
        secondEntity.friends.push({
            _id: firstEntity._id,
            email: firstEntity.email,
            userName: firstEntity.userName
        });

        secondEntity.save();
    }
}

export default MakeFriends;
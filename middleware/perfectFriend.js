const friendArray = ['Abir', 'Mim', 'Momin', 'Nahid', 'Azad'];

function perfectFriend(array) {
    const findFriend = array.find(singleFriend => singleFriend.length == 5);
    return findFriend;
}

const friend = perfectFriend(friendArray)
console.log(friend, '=>', [typeof friend])
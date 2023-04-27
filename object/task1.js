const users = [
    {
        usernamme: 'David',
        status: 'online',
        lastActivity: 10
    }
    ,
    {
        usernamme: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        usernamme: 'Bob',
        status: 'online',
        lastActivity: 104
    }

];
const onlineUsers = users.filter((e) => {
    return e.status === 'online'
})


function getMessage(array) {
    let message = "The following users are online now : ";
    for (let i = 0; i < array.length; i++) {
        message = message + array[i].usernamme;
        if (i != array.length - 1) {
            message = message + ",";
        }
    }
    console.log(message);
}

getMessage(onlineUsers);
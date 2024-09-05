let elForm = document.querySelector('.add-form');
let elList = document.querySelector('.todo-list');

elForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
        title: e.target.todo.value,
        isComplate: false,
        userName: "Shurat",
        useerEmail: "xudoyberdiyevshuhrat5@gmail.com"
    };

    // Send data to your server
    axios.post("http://localhost:3000/todos", data).then(res => {
        console.log(res);
        sendToTelegramBot(data);
    }).catch(err => {
        console.error(err);
    });
});

function sendToTelegramBot(data) {
    const token = '7327879478:AAERUmGmc4-F6E3ZJ1vyopz40HP6aCysOKA'; // Replace with your actual token
    const chat_id = 'YOUR_CHAT_ID'; // Replace with your chat_id

    const message = `New TODO Added: ${data.title}\nUser: ${data.userName}\nEmail: ${data.useerEmail}`;

 
    axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chat_id,
        text: message
    }).then(response => {
        console.log('Message sent to Telegram:', response);
    }).catch(error => {
        console.error('Error sending message to Telegram:', error);
    });
}

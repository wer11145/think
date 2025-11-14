// 需要后端服务器支持
const socket = new WebSocket('wss://yourserver.com/chat');
socket.onmessage = function(event) {
    // 接收并显示其他用户的消息
    displayMessage(JSON.parse(event.data));
};
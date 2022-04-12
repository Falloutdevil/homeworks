import React from 'react'
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Devil',
    message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    time: '22:00',
}
const messageDataOne = {
    avatar: 'https://download-cs.org/uploads/posts/2020-06/1593141143_3426.jpg',
    name: 'God',
    message: 'Lorem ipsum dolor sit amet. 33 aliquam quos id dolores voluptates At impedit officiis et omnis praesentium ex veniam quaerat ut molestias quas id dolore magni? Ea nihil ipsam sed autem illo ut accusantium voluptatibus non nostrum laboriosam.',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage
                avatar={messageDataOne.avatar}
                name={messageDataOne.name}
                message={messageDataOne.message}
                time={messageDataOne.time}
            />
            <hr/>
        </div>
    )
}

export default HW1

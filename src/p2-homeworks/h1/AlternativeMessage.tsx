import React from 'react'

import s from './AlternativeMessage.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const AlternativeMessage: React.FC<PropsType> = ({avatar, name, message, time}) => {
    return (
        <div className={s.message}>
            <div className={s.messageBlock}>
                <div className={s.name}>{name}</div>
                <div className={s.text}>{message}</div>
                <div className={s.time}>{time}</div>
            </div>
            <div className={s.angle}/>

            <img src={avatar} alt={'avatar'} className={s.avatar}/>
        </div>
    )
}

export default AlternativeMessage;

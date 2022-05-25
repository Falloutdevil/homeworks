import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: ( e: ChangeEvent<HTMLInputElement> ) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: ( e: KeyboardEvent<HTMLInputElement> ) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input; // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    onBlur={setNameCallback}
                />
                <div className={s.error}>{error}</div>
            </div>

            <SuperButton onClick={addUser} className={s.button} disabled={!name}>add</SuperButton>
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting

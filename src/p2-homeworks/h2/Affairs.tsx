import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: ( filter: FilterType ) => void
    deleteAffairCallback: ( id: number ) => void
    filter: FilterType
}

const Affairs: React.FC<AffairsPropsType> = ( {data, setFilter, deleteAffairCallback, filter} ) => {
    const mappedAffairs = data.map(( a: AffairType ) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const set = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        setFilter(e.currentTarget.value as FilterType)
    }

    const cnAll = s.button + ' ' + (filter === 'all' ? s.active : '')
    const cnHigh = s.button + ' ' + (filter === 'high' ? s.active : '')
    const cnMiddle = s.button + ' ' + (filter === 'middle' ? s.active : '')
    const cnLow = s.button + ' ' + (filter === 'low' ? s.active : '')


    return (
        <div className={s.mainBack}>

            {mappedAffairs}

            <SuperButton className={cnAll} onClick={set} value={'all'}>All</SuperButton>
            <SuperButton className={cnHigh} onClick={set} value={'high'}>High</SuperButton>
            <SuperButton className={cnMiddle} onClick={set} value={'middle'}>Middle</SuperButton>
            <SuperButton className={cnLow} onClick={set} value={'low'}>Low</SuperButton>
        </div>
    )
}

export default Affairs

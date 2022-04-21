import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

const Affairs: React.FC<AffairsPropsType> = ({data, setFilter, deleteAffairCallback, filter}) => {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    // const setAll = () => {
    //     setFilter('all')
    // } // need to fix
    // const setHigh = () => {
    //     setFilter('high')
    // }
    // const setMiddle = () => {
    //     setFilter('middle')
    // }
    // const setLow = () => {
    //     setFilter('low')
    // }

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setFilter(e.currentTarget.value as FilterType)
    }

    const cnAll = s.button + ' ' + (filter === 'all' ? s.active : '')
    const cnHigh = s.button + ' ' + (filter === 'high' ? s.active : '')
    const cnMiddle = s.button + ' ' + (filter === 'middle' ? s.active : '')
    const cnLow = s.button + ' ' + (filter === 'low' ? s.active : '')

    
    return (
        <div>

            {mappedAffairs}

            <button className={cnAll} onClick={set} value={'all'}>All</button>
            <button className={cnHigh} onClick={set} value={'high'}>High</button>
            <button className={cnMiddle} onClick={set} value={'middle'}>Middle</button>
            <button className={cnLow} onClick={set} value={'low'}>Low</button>
        </div>
    )
}

export default Affairs

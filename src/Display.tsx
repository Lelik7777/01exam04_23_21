import React from 'react';
import s from './Display.module.css'

type DisplayType = {
    count: number;
}
export function Display(props: DisplayType) {
    return <div className={props.count===5?`${s.wrapperDisplay} ${s.error}`:s.wrapperDisplay}>
        {props.count}
    </div>
}
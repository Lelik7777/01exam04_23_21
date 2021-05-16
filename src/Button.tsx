import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    onClickButtonOn: () => void;
    reset: () => void;
}

export function Button(props: ButtonType) {
    const onFun = () => props.onClickButtonOn();
    const resetFun = () => props.reset();
    return <div className={s.wrapperButton}>
        <div className={`${s.button} `} onClick={onFun} >On</div>
        <div className={`${s.button} `} onClick={resetFun}>Reset</div>
    </div>
}
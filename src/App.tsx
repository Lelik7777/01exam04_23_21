import React, {useState} from 'react';
import './App.module.css';
import s from './App.module.css'
import {Display} from './Display';
import {Button} from './Button';

//export  type CountType=0|1|2|3|4|5 ;
function App() {
    let [count, setCount] = useState(0);
    function onClickButtonOn() {
        if(count<5){
            count++;
        }

          setCount(count)

    }
    function reset() {
        setCount(0);
    }
    return (
        <div className={s.wrapperApp}>
            <Display count={count}/>
            <Button onClickButtonOn={onClickButtonOn} reset={reset}/>
        </div>
    );
}
export default App;


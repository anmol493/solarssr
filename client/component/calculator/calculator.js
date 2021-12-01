import * as S from '../style';
import React, { useEffect, useRef, useState } from 'react';
import api from '../../api';
import axios from 'axios';
const Calculator=()=>{
    const unitRef=useRef();
    const [money,setMoney]=useState(-1);
    const onSubmit=(e)=>{
        e.preventDefault();
        api.post("/unit",{unit:unitRef.current.value}).then((data)=>{
            console.log(data.data.money)
            setMoney(data.data.money);
        })
        // console.log(unitRef.current.value);
    }

    return(
        <S.ContainCalc>
            <S.Calculator action="#">
                <S.CalculatorHeading>Calculator to calculate how much watt required:</S.CalculatorHeading>
                <S.Unit name="unit" placeholder="Unit" ref={unitRef}></S.Unit>
                <S.Submit onClick={onSubmit}>Submit</S.Submit>
            </S.Calculator>
            <S.Result>{!!(money+1) && `Cost of solar plant for desired plan is ${money}`}</S.Result>
        </S.ContainCalc>
    )
}

export default Calculator;
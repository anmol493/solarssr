import * as S from './style';
import React from 'react';
import { useHistory } from 'react-router';
function Services(){
    const history=useHistory();
    const handleClick=()=>{
        history.push('/calculator')
    }
    return (
        <>
        <S.Image>
            <S.Content>
            <S.Heading>India's Trusted Solar Company</S.Heading>
            <S.ButtonContainer>
            <S.Button onClick={handleClick}>On Grid</S.Button>
            <S.Button onClick={handleClick}>Off grid</S.Button>
            </S.ButtonContainer>
            </S.Content>
        </S.Image>
        
        </>

    )
}

export default Services;
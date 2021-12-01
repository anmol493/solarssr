import React from 'react';
import * as S from './style';
import '../../styles/home.css';
import { renderRoutes } from 'react-router-config';

function PageHeader({route}){
    return (
        <>
            <S.Header>
                <S.Logo />
                <S.HeaderRight>
                    <S.NormalText href="#about">About Us</S.NormalText>
                    <S.NormalText href="">Products</S.NormalText>
                    <S.NormalText href="">Offering</S.NormalText>
                    <S.NormalText href="">Login</S.NormalText>
                </S.HeaderRight>
            </S.Header>
            {renderRoutes(route.routes)}
        </>

    )
};

export default PageHeader;
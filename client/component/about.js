import * as S from './style';
import team from '../../images/team.svg';
import city from '../../images/city.svg';
import money from '../../images/money.svg';
import guarantee from '../../images/guarantee.svg'
import React from 'react';

function About(){
    return (
        <S.About id="about">
            <S.SideImage />
            <S.OuterWrapper>
            <S.InnerWrapper>
            <S.ContentImage>
                <S.Img image={team}/>
                <S.ImgContent>Strong trusted team</S.ImgContent>
            </S.ContentImage>
            <S.ContentImage>
            <S.Img image={city}/>
            <S.ImgContent>Availability</S.ImgContent>
            </S.ContentImage>
            </S.InnerWrapper>
            <S.InnerWrapper>
            <S.ContentImage>
            <S.Img image={money}/>
            <S.ImgContent>Available at cheap prices</S.ImgContent>
            </S.ContentImage>
            <S.ContentImage>
            <S.Img image={guarantee}/>
            <S.ImgContent>5 Years Guarantee</S.ImgContent></S.ContentImage>
            </S.InnerWrapper>
            </S.OuterWrapper>
            
        </S.About>
    )
}

export default About;
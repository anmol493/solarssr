import React from 'react';
import * as S from './style';
import linkedIn from '../../images/linkedin.svg';
import fb from '../../images/facebook.svg';
import insta from '../../images/instagram.svg';
function Footer(){
    return (
        <>
        <S.FooterContainer>
            <S.FooterColumns>
                <S.FooterRowsHeading>Our Product</S.FooterRowsHeading>
                <S.FooterRows>Residential</S.FooterRows>
                <S.FooterRows>Commercial</S.FooterRows>
                <S.FooterRows>Off grid</S.FooterRows>
                <S.FooterRows>On grid</S.FooterRows>
                <S.FooterRows>Batteries</S.FooterRows>
                <S.FooterRows>Repair</S.FooterRows>
                <S.FooterRows>Service</S.FooterRows>
                <hr/>
                <S.SocialText>Follow us on</S.SocialText>
                <S.SocialImagesContainer>
            <S.SocialImage image={linkedIn}/>
            <S.SocialImage image={fb}/>
            <S.SocialImage image={insta}/>
         </S.SocialImagesContainer>
         <hr/>
            </S.FooterColumns>
            
            <S.FooterColumns>
                <S.FooterRowsHeading>About Us</S.FooterRowsHeading>
                <S.FooterRows>About us</S.FooterRows>
                <S.FooterRows>Availability</S.FooterRows>
                <S.FooterRows>Why choose us</S.FooterRows>
            </S.FooterColumns>
            <S.FooterColumns>
                <S.FooterRowsHeading>More Links</S.FooterRowsHeading>
                <S.FooterRows>Working</S.FooterRows>
                <S.FooterRows>Blogs</S.FooterRows>
                <S.FooterRows>Investors</S.FooterRows>
                <S.FooterRows>Business opportunity</S.FooterRows>
            </S.FooterColumns>
            
            </S.FooterContainer>
            
         <hr/>
    </>
    )
}

export default Footer;
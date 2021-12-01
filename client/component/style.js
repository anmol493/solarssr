import styled from 'styled-components';
import LogoImage from '../../images/Logo.png';
// Header
export const Header=styled.div`
    display:flex;
    height:55px;
    background-image: linear-gradient(135deg, #FFBD9B, #FFD8CC);
    padding:30px;
    justify-content:space-between;
    align-items:center;
    font-family:Roboto;
    font-size:2rem;
    color:white;
`

export const Logo=styled.div`
  width:100px;
 height:100px;
 background-image:url(${LogoImage});
 background-size:cover;
 
`

export const HeaderRight=styled.div`
    display:flex;
    flex-direction:row;

`

export const NormalText=styled.a`
    color:white;
    text-decoration:none;
    margin:25px;
`
// Inner
export const Image=styled.div`
    background-image:url("https://blueandgreentomorrow.com/wp-content/uploads/2020/11/shutterstock_1368232784.jpg");
    width:100%;
    height:calc(100vh - 115px);
    background-size:cover;
    text-align:center;
`

export const Content=styled.div`
    position:relative;
    top:149px;
    color:#28FFBF;

`

export const Heading=styled.div`
font-size:4em;
`

export const Button=styled.div`

  display: inline-block;
  padding: 20px;
  border-radius: 10rem;
  color: #fff;
  font-size: 2rem;
  letter-spacing: .15rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin:50px;
  margin-top:60px;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #28FFBF;
    border-radius: 10rem;
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: darken(#28FFBF, 15%);
    transition: all .3s;
    border-radius: 10rem;
    z-index: -1;
  }
  &:hover {
    color: blue;
    &:before {
      width: 100%;
    }
  }
`

export const ButtonContainer=styled.div`
  display:flex;
  justify-content:center;
`

// About

export const About=styled.div`
  display:flex;
  background:#F3F1F5;
`

export const SideImage=styled.div`
  background-image:url("https://www.thespruce.com/thmb/q0Ced8TrvCCjIY9M8ttdzaR13QM=/600x450/filters:no_upscale():max_bytes(150000):strip_icc()/best-solar-panels-e63374e9177c4418a90b2aac00180c56.jpg");
  width:400px;
  height:698px;
  background-position: right;
  background-size:cover;
`

export const OuterWrapper=styled.div`
  width:calc(100vw - 400px);
`

export const InnerWrapper=styled.div`
  display:flex;
  justify-content:space-around;
  width:calc(100vw - 400px);
  margin:100px;
`

export const ContentImage=styled.div`

`

export const Img=styled.div`
  background:url(${(props)=>props.image});
  background-size:cover;
  width:100px;
  height:100px;
`;

export const ImgContent=styled.div`
  width:100px;
  font-size:1.5rem;
  font-family:Quicksand;
  color:green;
`

export const FooterContainer=styled.div`
  display:flex;
  width:80%;
  justify-content:space-around;
  margin:0 auto;
`
export const ContactHeading=styled.div`
  color:#FE9898;
  padding-top:5px;
  text-align:center;
  font-size:1rem;
`

export const SocialImagesContainer=styled.div`
  display:flex;
  
`;

export const SocialImage=styled.div`
  background:url(${(props)=>props.image});
  width:30px;
  height:30px;
  margin-right:10px;
  margin-top:10px;
`;

export const FooterColumns=styled.div`
`;

export const FooterRows=styled.div`
  line-height:25px;
`;

export const FooterRowsHeading=styled.div`
  font-weight:bold;
  font-size:1.5rem;
  line-height:60px;
`;

export const SocialText=styled.div`
font-weight:bold;
`;

export const Calculator=styled.form`
  text-align:center;
  margin-top:30px;
`

export const Unit=styled.input`
  border:1px solid blue;
  font-size:20px;
  padding:10px;
  border-radius:5%;
`

export const Submit=styled.button`
  padding:10px;
  font-size:20px;
  border:1px solid;
  border-radius:5%;
`;

export const CalculatorHeading=styled.h1`
  font-size:40px;
  color:blue;
`;

export const ContainCalc=styled.div`
`;

export const Result=styled.div`
  margin-top:40px;
  font-size:30px;
  text-align:center;
  color:blue;
`;
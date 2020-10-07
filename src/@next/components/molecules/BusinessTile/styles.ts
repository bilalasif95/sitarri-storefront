import { media,styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: left;
`;
export const Wrapper = styled.div`
  margin: 10px 16px 16px 0px;
  box-shadow: 0 2px 10px 0 rgb(117 116 116 / 10%);
  -webkit-box-shadow: 0 2px 10px 0 rgb(117 116 116 / 10%);
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  min-height: 320px;
  ${media.smallScreen`
  margin: 5px 0;
  min-height: 275px;
`}
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
  @media(max-width: 767px){
    align-items: flex-end;
    margin-bottom: 5px;
  }
`;

export const Top = styled.div`
  background: #fff;
  transition: 0.3s;
  position: relative;
`;
export const Brand = styled.div`
  position: absolute;
  top: 95px;
  height: 50px;
  width: 50px;
  left: 12px;
  border-radius: 60px;
  overflow: hidden;
  z-index: 1;
  > img {
    height: 50px;
    width: 50px;
    // border: 1px solid #B2BEC7;
    border-radius: 60px;
    background: #fff;
  }
  @media(max-width: 767px){
    top: 64px;
  }
  
`;

export const Bottom = styled.div`
  border-radius: 5px;
  padding: 1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top:  1px solid #f5f5f5;
`;

export const Content = styled.div`
  padding: 1rem;
  position: relative;
`;

export const Link = styled.div`
  position: absolute;
  top: -1rem;
  right: 1rem;
  background: #fff;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  color: #000;
  font-size: 12px;
  -webkit-box-shadow: 0px 0px 9px -3px rgba(0,0,0,0.18);
  -moz-box-shadow: 0px 0px 9px -3px rgba(0,0,0,0.18);
  box-shadow: 0px 0px 9px -3px rgba(0,0,0,0.18);
`;

export const ModalLink = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #fff;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  color: #000;
  font-size: 12px;
  -webkit-box-shadow: 0px 0px 9px -3px rgba(0,0,0,0.18);
  -moz-box-shadow: 0px 0px 9px -3px rgba(0,0,0,0.18);
  box-shadow: 0px 0px 9px -3px rgba(0,0,0,0.18);
`;

export const Title = styled.h4`
  font-weight: 700;
  ${textProps}
  font-size: 18px;
  margin: 0 0 0.5rem;
  color: #40464A;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 50%;
  @media(max-width: 767px){
    font-size: 18px;
    margin: 0 0 0rem;
  }
`;

export const Desc = styled.p`
font-weight: normal;
font-size: 14px;
text-align: left;
color: #40464A;
line-height: normal;
max-height: 34px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
width: 55%;
}
@media (max-width: 767px){
  font-size: 11px;
}
`;

export const Price = styled.p`
  font-size: 12px
  color: #435365;
  text-align: left;
`;

export const Image = styled.div`
  width: 100%;
  height: 165px;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background: #f1f5f5;
  @media(max-width:540px){
    height: 125px;
  }
  > img {
    margin: 0 2px 0 0;
    max-width: 255px;
    height: 100%;
  }
  .noImg {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    display: block;
    height: auto;
  }
  .image-gallery{
    width: 100%;
    .image-gallery-icon{
      z-index:2;
    }
    .image-gallery-left-nav .image-gallery-svg, 
    .image-gallery-right-nav .image-gallery-svg {
      height: 20px;
      width: 10px;
    }
    .image-gallery-slide{
      width: 100%;
      //  padding:0 2px 0 0;
    }
    .image-gallery-content 
    .image-gallery-bullets {
      top: 85%;
      .image-gallery-bullet {
        padding: 3px;
    }
    .image-gallery-slide
     .image-gallery-image{
       max-height: 100% !important;
     }
  }
  ${media.smallScreen`
  height: 130px;
  .image-gallery-bullets {
    top: 50% !important;
  }
`}
`;

export const ModalImage = styled.div`
  width: 100%
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    border-radius: 5px;
  }
  .image-gallery{
    width: 100%;
    .image-gallery-icon{
      z-index:2;
    }
    .image-gallery-left-nav .image-gallery-svg, 
    .image-gallery-right-nav .image-gallery-svg {
      // height: 20px;
      width: 20px;
    }
    .image-gallery-slide{
      // width: 75%;
      // padding:0 2px 0 0;
    }
    .image-gallery-content 
    .image-gallery-slide
     .image-gallery-image{
       max-height: 100% !important;
     }
  }
`;


export const Left = styled.div`
  width: 80%;
`;

export const Right = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Imgbox = styled.div`
overflow: hidden;
height: 61px;
img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
`;

export const Timing = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`;

export const Open = styled.p`
  font-size: 14px
  color: #1fa300;
  text-align: left;
  margin: 0 0.5rem 0 0;
`;

export const Close = styled.p`
  font-size: 12px
  color: #40464A;
  text-align: left;
  display: flex;
  align-items: center;
  span{
    width: 2px;
    height: 2px;
    display: block;
    background: #435365;
    margin: 0 0.3rem 0 0rem;
  }
`;

export const TotalReviews = styled.div` 
font-size: 12px;
color: #99A9B4;
text-align: left;
display: flex;
align-items: center;
`;

export const Likes = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`;
export const star = styled.p`
  margin: 0px 10px;
  svg{
    path{
      fill: #FBCE2E;
    }
  }
  @media(max-width: 540px){
    margin-top: 5px;
  }
`;
export const Nos = styled.p`
  font-size: 14px
  color: #40464A;
  font-weight: 600;
  text-align: left;
  margin: 0 0.5rem 0 0;
  display: flex;
  align-items: center;
  @media(max-width: 767px){
    font-size: 12px
  }
`;

export const Stars = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: 0 3px;
svg{
  margin: 0 1px;
   path{
fill:  #ff4b13 !important;
  }
}
svg:last-child{
  fill: #ffede7;
}
`;

export const Location = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
background: #FDECD1;
border-radius: 3px;
padding: 0px 2px;
// width: 60%;
svg{
  margin: 0 0.5rem 0 0;
  fill: #F39721;
  width: 10px;

}
`;
export const Tags = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const Subtag = styled.div`
  margin-right: 10px;
  font-size: 10px;
  background-color: #F7F7F8;
  border-radius: 3px;
  padding: 0px 4px;
  color: #99A9B4;
`;
export const Miles = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Distance = styled.p`
  font-size: 10px
  color: #F39721;
  text-align: left;
  // margin: 0 1rem 0 0;
`;

export const Address = styled.p`
  font-size: 12px
  color: #666;
  text-align: left;
`;


export const Icon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  flex-grow: 1;
  position: relative;
  padding: 2px 3px 20px 10px;
  margin: 5px 3px 2px 1px;
  z-index: 4;
  top: 80%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: none;
  border-radius: 5px;
  border: 1px solid #000;
  background-image: url(../../../images/back.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  @media (max-width: 540px){
    
  }
`;
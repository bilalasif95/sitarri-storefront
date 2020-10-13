import { media, styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: left;
`;
export const Wrapper = styled.div`
  margin: 6px 16px 13px 0px;
  -webkit-box-shadow: 0px 3px 3.5px rgba(112,144,176,0.1);
  box-shadow: 0px 3px 3.5px rgba(112,144,176,0.1);
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  ${media.smallScreen`
  margin: 10px;
`}
`;
export const Top = styled.div`
  background: #fff;
  transition: 0.3s;
  position: relative;
`;

export const Brand = styled.div`
  position: absolute;
  top: 107px;
  height: 50px;
  width: 50px;
  left: 8px;
  border-radius: 60px;
  overflow: hidden;
  z-index: 1;
  > img {
    height: 50px;
    width: 50px;
    // border: 1px solid #B2BEC7;
    border-radius: 60px;
    background: #fff;
    cursor: pointer;
  }
  @media(max-width: 767px){
    top: 64px;
  }
  
`;

export const EmptySpace = styled.div`
  min-height: 20px;
`;

export const Bottom = styled.div`
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
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
  -webkit-box-shadow: 0px 0px 9px -3px #7090b02e;
  -moz-box-shadow: 0px 0px 9px -3px #7090b02e;
  box-shadow: 0px 0px 9px -3px #7090b02e;
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
  -webkit-box-shadow: 0px 0px 9px -3px #7090b02e;
  -moz-box-shadow: 0px 0px 9px -3px #7090b02e;
  box-shadow: 0px 0px 9px -3px #7090b02e;
`;
export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  @media(max-width: 767px){
    align-items: flex-end;
    margin-bottom: 5px;
  }
`;
export const star = styled.p`
  margin: 3px 5px 0px;
  svg{
    path{
      fill: #FFCE2E;
    }
  }
  @media(max-width: 540px){
    margin-top: 5px;
  }
`;
export const Title = styled.h4`
  font-weight: 700;
  ${textProps}
  font-size: 18px;
  margin: 0 0 0.3rem;
  color: #40464A;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  // width: 90%;
  @media(max-width: 767px){
    font-size: 18px;
  }
`;

export const Desc = styled.p`
font-weight: normal;
font-size: 14px;
text-align: left;
color: #435365;
line-height: unset;
max-height: 34px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
// width: 55%;
p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
}
@media (max-width: 767px){
  font-size: 14px;
}
`;

export const Price = styled.p`
  font-size: 14px
  color: #40464A;
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
  .slider-control-bottomcenter {
    width: 100%;
    text-align: center;
  }
  .slider-slide {
    img {
      object-fit: cover;
      height: 165px;
    }
  }
  .product-page__product__gallery__nav {
    li {
      width: inherit !important;
      span {
        border: 1px solid #fff;
      }
    }
    li:hover span {
      background-color: #fff;
    }
    li.active span {
      background-color: #fff;
      border-color: #fff;
    }
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
      // padding:0 2px 0 0;
    }
    .image-gallery-content 
    .image-gallery-bullets{
      top: 85%;
      .image-gallery-bullet{
        padding: 3px;
      }

      @media(max-width: 540px){
        top: 50%;
      }
    }
    .image-gallery-slide
     .image-gallery-image{
       max-height: 100% !important;
     }
  }
  ${media.smallScreen`
  height: 130px;
  .image-gallery-bullets {
    top:70% !important;
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
  width: 75%;
  padding-right: 10px;
`;

export const Right = styled.div`
  width: 18%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Imgbox = styled.div`
overflow: hidden;
max-height: 70px;
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
export const TotalReviews = styled.div` 
font-size: 12px;
color: #99A9B4;
text-align: left;
display: flex;
align-items: center;
font-weight: 400 !important;
`;
export const Likes = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`;

export const Nos = styled.p`
  font-size: 14px
  color: #40464A;
  font-weight: 700;
  text-align: left;
  margin: 0 0.5rem 0 0;
  display: flex;
  align-items: end;
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
    path{
fill: #ffede7;
  }
  
}
`;
export const Location = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
background: #FDECD1;
border-radius: 3px;
padding: 0px 3px;
// width: 60%;
svg{
  margin: -1px 5px 0 0;
  fill: #F39721;
  width: 10px;

}
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





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
  border-radius: 10px;
  overflow: hidden;
  min-height: 387px;
  background: #fff;
  &:hover {
    background: #fff;
  }
  ${media.smallScreen`
  margin: 0;
  min-height: 362px;
  margin-top: 8px;
  margin-right: 8px;
`}
`;
export const Top = styled.div`
  background: #fff;
  transition: 0.3s;
  // @media(max-width: 480px) {
  //   padding: 0 1rem;  
  // }
`;

export const Bottom = styled.div`
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-items: center;
  border-top:  1px solid #f5f5f5;
  @media(max-width: 767px) {
    padding: 8px 16px 8px 16px;
    align-items: flex-end;
  }
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
  @media(max-width: 480px) {
    top: -1rem;
  }
`;

export const Title = styled.h4`
  font-weight: 700;
  ${textProps}
  margin: 0 0 0.3rem;
  color: #40464A;
  margin-bottom: 10px;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
`;
export const StoreTitle = styled.h4`
  font-weight: 700;
  ${textProps}
  margin: 0 0 0.3rem;
  color: #435365;
  margin-bottom: 10px;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  @media(max-width: 767px){
    margin-bottom: 0px;
  }
`;
export const TotalReviews = styled.div` 
font-size: 12px;
color: #99A9B4;
text-align: left;
display: flex;
align-items: center;
font-weight: 400 !important;
`;
export const Desc = styled.p`
font-weight: normal;
font-size: 14px;
text-align: left;
color: #8899A9;
line-height: unset;
max-height: 40px;
min-height: 40px;
overflow: hidden;
// white-space: nowrap;
text-overflow: ellipsis;
margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 14px;
  text-align: left;
  color: #435365;
`;

export const EmptySpace = styled.p`
  min-height: 40px;
  margin-bottom: 10px;
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

  .swiper-container-horizontal{
    .swiper-wrapper{        
      .swiper-slide{
        >img{
          width: 100%;
          height: 165px;
          object-fit: cover;
        }
      }
    }
    .swiper-button-next{
      background: #fff !important;
      height: 48px;
      width: 48px;
      border-radius: 25px;
      box-shadow: 0px 3px 6px #0000000D;
      -webkit-box-shadow: 0px 3px 6px #0000000D;
      top: 30%;
      right: 0px;
      &:after{
        font-size: 16px;
        font-weight: 900;
        color: #FF4B13;
      }
    } 


    .swiper-button-prev{
      background: #fff !important;
      height: 48px;
      width: 48px;
      border-radius: 25px;
      box-shadow: 0px 3px 6px #0000000D;
      -webkit-box-shadow: 0px 3px 6px #0000000D;
      top: 30%;
      left: 0px;
      z-index: 2;
          opacity: inherit;
      &:after{
        font-size: 16px;
        font-weight: 900;
        color: #FF4B13;
      }
    } 
    >.swiper-pagination-bullets{
      bottom: 8px !important;
      span{
        background: #fff !important;
      }
      @media(max-width: 540px){
        bottom: 25px !important;
      }
    }
  }


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
    .image-gallery-bullets {
      top: 85%;
      .image-gallery-bullet {
        padding: 3px;
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
    top: 70% !important;
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
      width: 100%;
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
  width: 85%;
  padding: 0px 10px;
  // @media (max-width: 767px){
  //   width: 67%;
  //   margin-top: 5px;
  // }
`;

export const Right = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width:767px){
    width: 17%;
    margin-top: 5px;
  }
`;
export const Imgbox = styled.div`
  // overflow: hidden;
  height: 50px;
  width: 50px;
  border-radius: 60px;
  img{
    width: 50px;
    height: 50px;
    border-radius: 60px;
    background: #fff;
    // border: 1px solid #B2BEC7;
  }
  // @media(max-width: 767px){
  //   height: 45px;
  // }
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
  margin: 0 0.3rem 0 0;
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
    border-radius: 100px;
  }
  @media (max-width: 767px){
    // font-size: 12px
  }
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  @media(max-width: 767px){
    margin-bottom: 0px;
  }
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
  // margin: 0 0.5rem 0 0;
  display: flex;
  align-items: end;
  @media (max-width: 767px){
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
justify-content: center;
align-items: center;
background: #FDECD1;
border-radius: 3px;
padding: 0px 4px;
// padding: 1px 5px;
// width: 70%;
margin-left: auto;
svg{
  margin: -1px 5px 0 0;
  fill: #F39721;
  width: 10px;

}
`;

export const star = styled.p`
margin: 3px 5px 0px;
  svg{
    path{
      fill: #FFCE2E;
    }
  }
`;

export const Miles = styled.p`
font-size: 10px
color: #F39721;
text-align: left;
// margin: 0 1rem 0 0;
`;

export const Distance = styled.p`
  font-size: 10px
  color: #F39721;
  text-align: left;
  // margin: 0 1rem 0 0;
`;
// export const Dist = styled.p`
//  width: 34%;
//  @media (max-width: 767px){
//   width: 36%;
//  }

// `;

export const Address = styled.p`
  font-size: 12px
  color: #666;
  text-align: left;
`;
export const CardTitle = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: -5px;
@media(max-width: 540px){
  margin-bottom: 0px;
}
`;
export const CardTime = styled.div`
display: flex;
justify-content: space-between;
`;




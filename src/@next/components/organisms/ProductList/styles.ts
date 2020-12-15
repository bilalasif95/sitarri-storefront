import { media, styled } from "@styles";

export const ProductList = styled.div`
  margin: 0 0 1rem;
  h3{
    padding: 13px 0px 13px 8px;
    font-size: 18px !important;
    color: #09253F;
  }
  ${media.smallScreen`
  h3{
    // padding: 12.5px 0px 12.5px 5px;
    font-size: 1rem;
    color: #09253F;
  }
`}
`;

export const Span = styled.span`
  display: inline-block;
  width: 5px;
  height: 5px;
  margin-left: 5px;
`;

export const Carouseltitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  // padding: 0px 5px;
  padding-right: 12px;
  p{
    font-size: 12px;
    color: #8899A9;
    span{
      cursor: pointer;
    }
    img{
    width: 6.18px;
    height: 10px;
    margin-left: 8px;
    }
  }
`;

export const OnlyCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const AllShops = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;
  @media (max-width: 992px){
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 540px){
    grid-template-columns: 1fr;
    // padding 0px 5px;
  }
`
export const hrBorder = styled.div`
border-bottom: 1px solid #F5F5F5;
position: relative;
width: 100%;
// margin-left: -13px;
overflow: hidden;
`;

export const Products = styled.div`
background-color: #fff;
margin-bottom: 32px;
div:focus{
    outline: none;
}

.slider-control-centerleft{
  top: 33% !important;
  left: -20px !important;
  >div{
    height: 27px !important;
    width: 35px !important;
    text-align: center !important;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    svg{
      margin-top: 16px !important;
    }
  }
  @media(max-width: 768px){
    top: 45% !important;
    left: -6px !important;
    background: #fff !important;
    border-radius: 25px;
    box-shadow: 0px 3px 6px #0000000D;
    -webkit-box-shadow: 0px 3px 6px #0000000D;
    height: 35px !important;
    width: 35px !important;
  }
  // @media(max-width: 540px){
  //   display: none;
  //  }
}
.slider-control-centerright{
  top: 33% !important;
  right: -20px !important;
  >div{
    // height: 35px !important;
    // width: 35px !important;
    text-align: center !important;
    padding: 0px;
  }
  @media(max-width: 768px){
    top: 45% !important;
    right: 0px !important;
    background: #fff !important;
    border-radius: 25px;
    box-shadow: 0px 3px 6px #0000000D;
    -webkit-box-shadow: 0px 3px 6px #0000000D;
    height: 35px !important;
    width: 35px !important;
  }
  // @media(max-width: 540px){
  //  display: none;
  // }
}
@media(max-width: 540px){
  margin-bottom: 8px;
}
`;

export const Shops = styled.div`
  background-color: #fff;
  margin-bottom: 32px;
  div:focus{
      outline: none;
  }
 
  .slider-control-centerleft{
    top: 33% !important;
    left: -20px !important;
    >div{
      height: 27px !important;
      width: 35px !important;
      text-align: center !important;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      svg{
        margin-top: 16px !important;
      }
    }
    @media(max-width: 768px){
      top: 56% !important;
      left: -6px !important;
      background: #fff !important;
      border-radius: 25px;
      box-shadow: 0px 3px 6px #0000000D;
      -webkit-box-shadow: 0px 3px 6px #0000000D;
      height: 35px !important;
      width: 35px !important;
    }
    // @media(max-width: 540px){
    //   display: none;
    //  }
  }
  .slider-control-centerright{
    top: 33% !important;
    right: -20px !important;
    >div{
      // height: 35px !important;
      // width: 35px !important;
      text-align: center !important;
      padding: 0px;
    }
    @media(max-width: 768px){
      top: 56% !important;
      right: 0px !important;
      background: #fff !important;
      border-radius: 25px;
      box-shadow: 0px 3px 6px #0000000D;
      -webkit-box-shadow: 0px 3px 6px #0000000D;
      height: 35px !important;
      width: 35px !important;
    }
    // @media(max-width: 540px){
    //  display: none;
    // }
  }
  @media(max-width: 540px){
    margin-bottom: 8px;
  }
`;
export const ProductsShop = styled.div`
.swiper-button-prev{
  top: 40% !important;
}
.swiper-button-next{
  top: 40% !important;
}
.slider-control-centerright{
  top:45%;
  right: -20px;
}
`;
export const Slider = styled.div`
  padding-left: 8px;
  position: relative;
  .swiper-container-horizontal{
    .swiper-wrapper{        
      .swiper-slide{
        >img{
          width: 424px;
          height: 165px;
          object-fit: cover;
        }
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
      right: -25px;
      z-index: 1;
      &:after{
        font-size: 16px;
        font-weight: 900;
        color: transparent;
        background-image: url("../../../../images/iconmonstr-arrow-64.svg");
        background-repeat: no-repeat;
        transform: rotate(180deg);
        /* background-size: contain; */
        /* height: 15px; */
        width: 25px;
        // line-height: 17px;
      }
      @media(max-width: 540px){
        display: none;
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
      left: -15px;
      z-index: 1;
      &:after{
        font-size: 16px;
        font-weight: 900;
        color: transparent;
        background-image: url("../../../../images/iconmonstr-arrow-64.svg");
        background-repeat: no-repeat;
        // transform: rotate(180deg);
        /* background-size: contain; */
        /* height: 15px; */
        width: 30px;
        // line-height: 16px;
      }
      @media(max-width: 540px){
        display: none;
      }
    } 
    >.swiper-pagination-bullets{
      bottom: 8px !important;
      span{
        background: #fff !important;
      }
      // @media(max-width: 540px){
      //   bottom: 25px !important;
      // }
    }


  .slider-frame{
      padding-bottom: 19px !important;
      ul{
        li:focus{
          outline: none;
        }
      }
      @media(max-width: 540px){
        padding-bottom: 12px !important;
      }
  }
`;
// export const ProductsSlider = styled.div`

//   .slider-frame{
//       padding-bottom: 35px !important;
//       ul{
//         li:focus{
//           outline: none;
//         }
//       }
//   }
// `;
export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;
  margin-left: 8px;
  ${media.largeScreen`
    grid-template-columns: 1fr 1fr;
    grid-gap: ;
  `}

  ${media.smallScreen`
    grid-template-columns: 1fr;
    grid-gap: ;
    margin-left: 0px;
  `}
`;

export const Loader = styled.div`
  text-align: center;
  margin: 2.5rem 0;
`;
export const Skeletoncards = styled.div`
  // margin-top: 82px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 540px){
    >div:nth-child(n+2) {
      display: none; 
    } 
  }
`;
export const NoResult = styled.div`
  text-align: center;
`;



export const Loadingskeleton = styled.div`
// Skeleton
.Loadingskeleton{
  padding: 2rem 10px;
}
.Skeletonbox{
  padding: 45px 10px;
  background-color: #EEF2F5;
  border-radius: 10px;
}
.SkeletonTitle{
  height: 10px;
  width: 93px;
  background-color: #EEF2F5;
  border-radius: 10px;
  margin-top: 10px;
}
.Skeletonbar, .Skeletonbox, .SkeletonTitle, .CardsTitle, .SkeletonCardsbody, .SkeletonCardtext, .SkeletonCardsbar{
  position: relative;
  overflow: hidden;
}
.Skeletonbar::before, .Skeletonbox::before, .SkeletonTitle::before, .CardsTitle::before, .SkeletonCardsbody::before, .SkeletonCardtext::before, .SkeletonCardsbar::before{
  content: '';
  display: block;
  position: absolute;
  left: -150px;
  top: 0;
  height: 100%;
  width: 150px;
  background: linear-gradient(to right, transparent 0%, #e5e9ec 50%, transparent 100%);
  animation: load 1.4s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
}
.Skeletoncards{
  margin-top: 82px;
  display: flex;
  justify-content: space-between;
}
.CardsTitle{
  height: 20px;
  width: 35%;
  background-color: #EEF2F5;
  border-radius: 10px;
}
.SkeletonCardsCont{
  width: 33.3%;
}
.SkeletonCardsbody{
  width: 99%;
  height: 190px;
  background-color: #EEF2F5;
  border-radius: 10px;
  margin-top: 69px;
}
.SkeletonCardtext{
  height: 13px;
  width: 110px;
  background-color: #EEF2F5;
  border-radius: 10px;
  margin-top: 10px;
}
.SkeletonCardsbar{
  height: 25px;
  width: 70%;
  background-color: #EEF2F5;
  border-radius: 10px;
  margin-top: 20px;
}
@keyframes load {
  from {
      left: -150px;
  }
  to   {
      left: 100%;
  }
}
// Skeleton
`;
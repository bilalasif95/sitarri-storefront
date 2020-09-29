import { media, styled } from "@styles";

export const ProductList = styled.div`
  margin: 0 0 1rem;
  h3{
    padding: 0;
  }
  ${media.smallScreen`
  h3{
    padding: 0;
    font-size: 1rem;
  }
`}
`;

export const Carouseltitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 5px;
  p{
    font-size: 12px;
    color: #99A9B4;
    span{
      cursor: pointer;
    }
    img{
      width: 5px;
      margin-left: 5px;
    }
  }
`;

export const OnlyCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const AllShops = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;
  @media (max-width: 992px){
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 540px){
    grid-template-columns: 1fr;
  }
`

export const Shops = styled.div`
  background-color: #fff;
  margin-bottom: 30px;
  div:focus{
      outline: none;
  }
  .slider-control-centerleft{
    top: 37% !important;
    left: -20px !important;
    >div{
      height: 40px !important;
      width: 40px !important;
      text-align: center !important;
      padding: 0px;
      svg{
        margin-top: 9px !important;
      }
    }
    @media(max-width: 767px){
      display: none;
    }
  }
  .slider-control-centerright{
    top: 37% !important;
    right: -20px !important;
    >div{
      height: 40px !important;
      width: 40px !important;
      text-align: center !important;
      padding: 0px;
    }
    @media(max-width: 767px){
      display: none;
    }
  }
`;
export const Slider = styled.div`
  padding-left: 5px;
  .slider-frame{
      padding-bottom: 35px !important;
      ul{
        li:focus{
          outline: none;
        }
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

  ${media.largeScreen`
    grid-template-columns: 1fr 1fr;
    grid-gap: ;
  `}

  ${media.smallScreen`
    grid-template-columns: 1fr;
    grid-gap: ;
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
  padding: 2rem 0rem;
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
  width: 33%;
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
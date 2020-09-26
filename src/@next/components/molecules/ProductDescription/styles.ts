import { media, styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: left;
`;

export const Wrapper = styled.div`

`;

export const Select = styled.div`
`;

export const AttributeList = styled.ul`
  columns: 2;
  column-width: 50%;

  ${media.largeScreen`
    column-width: 100%;
    columns: 1;
  `};
  width: 100%;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 30px;
    font-size: ${props => props.theme.typography.h4FontSize};
  }

  li::before {
    content: "•";
    margin-right: 20px;
    color: ${props => props.theme.colors.listBullet};
  }
`;

export const Indicator = styled.div<{ rotate: string }>`
  right: 1rem;
  transition-duration: 0.3s;
  transform: ${props =>
    props.rotate === "true" ? "rotate(180deg)" : "rotate(0deg)"};
  svg {
    margin-right: 5px;
  }
`;

export const ButtonSpan = styled.span`
    display: flex;
`;

export const Tabs = styled.div<{isSticky: any}>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #fff;
  margin: 0 0 1rem;
  border-radius: 5px;
  overflow: hidden;
  // box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  box-shadow: ${props => props.isSticky ? 'inherit' : '0 2px 10px 0 rgba(0, 0, 0, 0.1)'};
  .ub-color_234361 {
    color: ##09253f;
    font-weight: 800;
  }
`;
export const fixed = styled.div<{isSticky: any}>`
position: relative;
@media(max-width: 767px){
  position: ${props => props.isSticky ? 'sticky' : 'initial'};
  top: ${props => props.isSticky ? '0' : ''};
  .SkeletonHeader{
    position: initial;
    background: #fff;
    padding: 15px 10px;
    div{
      font-weight: 700;
      text-align: center;
    }
  }
  }
  
`;
export const Top = styled.div`
  background: #fff;
  transition: 0.3s;

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
      padding:0 2px 0 0;
    }
    .image-gallery-content 
    .image-gallery-slide
     .image-gallery-image{
       max-height: 100% !important;
     }
  }
`;

export const Content = styled.div`
  padding: 1rem;
  position: relative;
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
  font-weight: normal;
  ${textProps}
  margin: 0 0 0.3rem;
  color: #111212;
`;

export const Desc = styled.p`
font-weight: normal;
font-size: 12px;
text-align: left;
color: #777878;
line-height: normal;
max-height: 34px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
div {
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
`;

export const Price = styled.p`
  font-size: 12px
  color: #40464A;
  text-align: left;
`;

export const TabList = styled.div`
  display: flex;
  // flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  // width: 85%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
}
// @media(max-width: 767px){
//   width: 80%
// }
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 1rem;
.jlQsbh{
  position: absolute;
  top: 53px;
  right: -85px;
  z-index: 2;
}
  .css-1pcexqc-container{
    position: initial;
    .css-kj6f9i-menu{
      width: 15%;
    }
    .sc-csuQGl{
      position: initial;
    }
  }

  button {
    display: flex;
    align-items: center;
    color: #000;
    svg {
      margin-left: 5px;
      width: 9px;
      path{
        fill: #000;
      }
    }
  }
  // @media(max-width: 767px){
    .css-1pcexqc-container{
     
      .css-kj6f9i-menu{
        
        @media(max-width: 767px){
          width: 100% !important;
        }
      }
      .sc-csuQGl{
        position: initial;
      }
    }
    button{
    background: #fff !important;
    border-radius: 3px;
    box-shadow: -5px 0px 9px #bbb9b8d1;
    padding: 12px 5px;
   
  //   }
  // }
`;

export const Sectitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #111212;
  text-align: left;
  margin: 0 0 1.5rem; 
  width: 100%;
`;

export const TabTitle = styled.div<{ active?: boolean }>`
  cursor: pointer;
  color: #A1AFBB;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.02em;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  text-align: center;
  // text-overflow: ellipsis;
  max-width: 120px;
  border-bottom: ${props => props.active ? '1px solid #F4B49F' : 'none'};
  color: ${props => props.active ? "#1F3950" : "#A1AFBB"};
  font-size: 12px;


  ${media.smallScreen`
    font-size: ${(props: any) => props.theme.typography.h4FontSize};
    min-width: 100px;
    width: 33.33%;
    font-size: 12px;
  `};
  @media(max-width: 450px){
    width: 50%;
  }
`;

export const AttributeName = styled.span`
  color: ${props => props.theme.colors.listAttributeName};
`;
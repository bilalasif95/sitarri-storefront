import { styled } from "@styles";

export const Wrapper = styled.div`
  margin-bottom: 35px;
  @media(max-width:640px){
    margin-bottom: 7px;
  }
`;

export const SortLine = styled.div<{ sortby: any }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 14px;
  background: ${props => props.sortby === "Results:" ? "#F6FCF7" : "#fff"};
  border: ${props => `1px solid ${props.sortby === "Results:" ? "#69CD74" : "#F5F5F5"}`};
  border-radius: 50px;
  cursor: pointer;
  &:after{
    content: '';
    position: absolute;
    border-bottom: ${props => props.sortby === "Results:" ? "1px solid #69CD74" : "1px solid #F7F7F7"};
    width: 18px;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 27px;
    top: 16px;
    @media(max-width: 767px){
      right: 19px;
      top: 14px;
    }
  }
  span{
    color: ${props => props.sortby === "Results:" ? "#69CD74" : "#7d7d7d"}
    font-size: 13px;
    
    .SearchIcon{
      // margin-top: 3px;
    }
    div{
      svg{
        fill: ${props => props.sortby === "Results:" ? "#69CD74" : "#EE744D"};
        vertical-align: middle;
      }
    }
    @media(max-width: 767px){
      margin-right: 20px;
  }
  }
  @media(max-width: 767px){
    padding: ${props => props.sortby === "Results:" ? "3px 10px" : "4px 10px"};
    margin-right: 10px;
}
`;

export const Indicator = styled.div<{ rotate: string }>`
  right: 1rem;
  transition-duration: 0.3s;
  transform: ${props =>
    props.rotate === "true" ? "rotate(180deg)" : "rotate(0deg)"};
`;
export const menuDropdown = styled.div`
    
    @media(max-width: 540px){
      background-color: #00000069;
      width: 100%;
      position: fixed;
      height: 100vh;
      z-index: 2;
      top: 0;
      left: 0;
    }
`;

export const Submenu = styled.div`
  position: absolute;
  top: 52px;
  background: #fff;
  width: 240px;
  border-radius: 5px;
  z-index: 1;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.3), 0 8px 10px -4px #7090b02e;
  -webkit-box-shadow: 0 0 1px rgba(67, 90, 111, 0.3), 0 8px 10px -4px #7090b02e;
  // -webkit-transition-timing-function:  ease-in-out ;
  // transition-duration: 300ms;
  // transform: scale(1);
  // transition-timing-function: ease-in-out;
  // transition-property: opacity, -webkit-transform, transform;
  // transform: scale(0.9) translateY(-1px);
  // transform-origin: 80px 0px;
  //   opacity: 1;
  //   visibility: visible;
  //   transform: scale(1);
  //   -webkit-transform: scale(1);
  @media(max-width: 540px){
    position: fixed;
    bottom: 0;
    top: 57%;
    width: 100%;
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
    border-radius: inherit;
  }
`;
export const SubmenuTitle = styled.div`
    font-weight: 700;
    color: #09253f;
    padding: 10px 10px;
    font-size: 18px;
    border-bottom: 1px solid #E4E7EB;
    position: relative;
    // .jlQsbh{
    //   top: 0 !important;
    // }
`;
export const SubmenuList = styled.div<{ categoriesMenu: boolean }>`
  padding: 5px 0px;
  border-bottom: 1px solid #EDF0F2;
  cursor: pointer;
  color: #8799a9;
  font-size: 12px;
  color: ${props =>
    props.categoriesMenu ? "#000" : "#8799a9"};
`;
export const Input = styled.div`
  svg{
    position: absolute;
    z-index: 2;
    margin-top: 8px;
    left: 15px;
    path{
      fill: #8e8e8f;
    }
  }
    input{
      width: 106%;
      height: 31px;
      padding-left: 35px;
      border: none;
      background: #F5F6F7;
      position: relative;
      margin-left: -15px;
      &:focus{
        outline: none;
      }
    }
`;
export const SubmenuBox = styled.div`
    padding: 0px 0px 0px 15px;
    .css-kj6f9i-menu{
      position: inherit;
      border: none;
      box-shadow: inherit;
      margin: 0px 0px;
      .css-11unzgr {
        max-height: 150px;
        padding: 0px 0px 0px 15px;
        .css-1gl4k7y{
          padding: 8px 55px;
          text-align: inherit;
          @media(max-width: 540px){
            padding: 8px 90px;
          }
        }
        ::-webkit-scrollbar-thumb{
          display: none;
        }
        ::-webkit-scrollbar-track{
          display: none;
        }
        .css-19ni769-option{
          padding: 0px;
          color: #8799a9;
          border-bottom: 1px solid #EDF0F2;
          font-size:12px;
          min-height: 31px;
          cursor: pointer;
        }
        .css-r59xpm-option{
          font-weight: 400;
          min-height: 31px;
          border-bottom: 1px solid #EDF0F2;
          font-size: 12px;
          padding: 0px;
        }
        @media(max-width: 540px){
          position: inherit;
        }
      }    
    }
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0px 10px 0;
  position: relative;
  background: #fff;
  .jlQsbh{
    position: absolute;
    z-index: 2;
    top: 8px;
    right: 3px;
    border-radius: inherit !important;
    width: 24px;
    height: 24px;
    &:hover{
      background-color: rgba(67, 90, 111, 0.06);
      }
    svg{
      path{
        fill: #0e2a43;
      }
    }
  }
  .gsBHXN{
    position: relative;
  }
  .css-kj6f9i-menu{
    .css-19ni769-option{
      border-bottom: 1px solid #fafafa;
    }
    .css-19ni769-option:focus, .css-r59xpm-option:focus{
      outline: none;
    }
    .css-19ni769-option:active, .css-r59xpm-option:active{
      background: #fff;
    }
  }
  @media(max-width:768px){
    justify-content: space-between;
    padding: 10px 5px;
    overflow-x: scroll;
    display: flex;
    ::-webkit-scrollbar{
      display: none;
    }
    .jlQsbh{
      z-index: 99999;
    }
  }
`;

export const Bar = styled.div`
  height: 5rem;
  background-color: ${props => props.theme.tile.backgroundColor};
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  font-size: ${props => props.theme.typography.smallFontSize};
  margin-top: 1rem;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

export const RightSide = styled.div`
  height: 1.2rem;
`;

export const FiltersButton = styled.button`
  font-size: ${props => props.theme.typography.smallFontSize};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Clear = styled.button`
  padding-left: 2rem;
  cursor: pointer;
  font-size: ${props => props.theme.typography.smallFontSize};
  color: ${props => props.theme.colors.lightFont};
`;
export const Element = styled.span`
  width:18%; 
  margin: 0 0.7rem;
  @media(max-width:1024px){
    width:17%;
    margin: 0 5px;
  }
  @media(max-width:768px){
    width:30%;
    margin: 0;
  }
  @media(max-width:480px){
    width:100%;
  }
`;

export const Filters = styled.span`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  padding: 0 0.6rem;
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.lightFont};
`;

export const Sort = styled.div`
  width: 100%;
  display: inline-block;
`;

export const FiltersChipsWrapper = styled.div`
  > div {
    margin: 0.4rem;
  }
`;

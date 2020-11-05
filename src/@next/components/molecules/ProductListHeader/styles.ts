import { styled } from "@styles";

export const Wrapper = styled.div`
  margin-bottom: 32px;
  @media(max-width:640px){
    margin-bottom: 8px;
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
    right: 20px;
    top: 14px;
    @media(max-width: 767px){
      right: 19px;
      top: 12px;
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
  top: 48px;
  background: #fff;
  width: 240px;
  border-radius: 5px;
  z-index: 2;
  min-height: 248px;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.3), 0 8px 10px -4px rgba(67, 90, 111, 0.47);
  -webkit-box-shadow: 0 0 1px rgba(67, 90, 111, 0.3), 0 8px 10px -4px rgba(67, 90, 111, 0.47);
  transform: scale(1);
  transition: all 0.25s cubic-bezier(0.5, 1.8, 0.9, 0.8);
  @media(max-width: 540px){
    position: fixed;
    bottom: 0;
    top: 0.5%;
    width: 100%;
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
    border-radius: inherit;
    overflow-y: scroll;
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
    @media(max-width: 540px){
      text-align: center;
    }
`;
export const Menuborder = styled.div`
@media(max-width: 540px){
  width: 40px;
  height: 0px;
  border: 4px solid var(--text-light);
  border-bottom: 4px solid #8899A9;
  opacity: 1;
  margin: 0px auto;
  border-radius: 100px;
  margin-top: 16px !important;
}
`;
export const SubmenuList = styled.div<{ categoriesMenu: boolean }>`
  border-bottom: 1px solid #EDF0F2;
  cursor: pointer;
  color: #8799a9;
  font-size: 12px;
  color: ${props =>
    props.categoriesMenu ? "#09253F" : "#8799a9"};
    border-bottom: ${props =>
      props.categoriesMenu ? "none" : "    border-bottom: 1px solid #EDF0F2;"};
    padding: 6px 0px 0px 0px;
    margin-left: 18px;
`;

export const MenuLink = styled.div`
&:last-child{
  div{
    border-bottom: none;
  }
}
  &:hover{
    background-color: rgba(67, 90, 111, 0.06);
    cursor: pointer;
  }

`;

export const Input = styled.div`
  svg{
    position: absolute;
    z-index: 2;
    margin-top: 9px;
    left: 15px;
    // path{
    //   fill: #8e8e8f;
    // }
  }
    input{
      width: 100%;
      height: 31px;
      padding-left: 35px;
      border: none;
      background: #F5F6F7;
      position: relative;
      // margin-left: -15px;
      &:focus{
        outline: none;
      }
    }
`;
export const SubmenuBox = styled.div<{ type: string }>`
    .css-kj6f9i-menu{
      position: inherit;
      border: none;
      box-shadow: inherit;
      margin: 0px 0px;
      .css-11unzgr {
        display: ${props =>
          props.type === "" ? "flex" : "block"};
          justify-content: ${props =>
            props.type === "" ? "center" : "block"};
            padding: ${props =>
              props.type === "" ? "24px 30px" : "0px 0px 0px 30px"};
        max-height: 115px;
        // padding: 24px 0px 24px 30px;
        border-bottom: 1px solid #EDF0F2;
        .css-1gl4k7y{
          padding: 8px 55px;
          text-align: inherit;
          font-size: 12px;
          color: #8799a9;
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
          // padding: 6px 0px;
          color: #8799a9;
          // border-bottom: 1px solid #EDF0F2;
          border-bottom: ${props =>
            props.type === "" ? "none" : "1px solid #EDF0F2"};
          border-top: ${props =>
              props.type === "" ? "none" : "1px solid #EDF0F2"};
          // border: 1px solid #F5F5F5;
          font-size:12px;
          width: ${props =>
            props.type === "" ? "57px" : "100%"};
            border-top: ${props =>
              props.type === "" ? "1px solid #F5F5F5" : ""};
              border-bottom: ${props =>
                props.type === "" ? "1px solid #F5F5F5" : ""};
                position: relative;
          min-height: 30px !important;
          margin: 0px !important;
          cursor: pointer;
          // &:after{
          //   border-bottom: 1px solid #000;
          //   position: absolute;
          //   content: '';
          //   width: 10px;
          //   transform: rotate(90deg);
          //   right: 0;
          // }
          &:hover{
            background-color: #435a6f0f;
          }
        }
        .css-19ni769-option:first-child{
          // padding: 6px 0px;
          color: #8799a9;
          width: ${props =>
            props.type === "" ? "44px" : "100%"};
          padding: ${props =>
                props.type === "" ? "4px 12px" : ""};
          border: ${props =>
                  props.type === "" ? "1px solid #53C865" : ""};
          color: ${props =>
                    props.type === "" ? "#53C865" : ""};
          border-top-left-radius: ${props =>
                      props.type === "" ? "50px" : ""};
                      border-bottom-left-radius: ${props =>
                        props.type === "" ? "50px" : ""};
          // border-bottom: 1px solid #EDF0F2;
          font-size:12px;
          min-height: 30px;
          cursor: pointer;
          &:hover{
            background-color: #435a6f0f;
          }
        }
        .css-19ni769-option:last-child{
          // padding: 6px 0px;
          color: #8799a9;
          width: ${props =>
            props.type === "" ? "44px" : "100%"};
          padding: ${props =>
                props.type === "" ? "4px 12px" : ""};
          border-top-right-radius: ${props =>
                      props.type === "" ? "50px" : ""};
                      border-bottom-right-radius: ${props =>
                        props.type === "" ? "50px" : ""};
          // border-bottom: 1px solid #EDF0F2;
          font-size:12px;
          min-height: 30px;
          cursor: pointer;
          &:hover{
            background-color: #435a6f0f;
          }
        }
        .css-r59xpm-option{
          // font-weight: 400;
          // min-height: 30px;
            border: 1px solid #F5F5F5;
            width: inherit;
          // font-size: 12px;
          // padding: 0px;
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
    border-radius: 3px;
    width: 24px;
    height: 24px;
    display: none !important;
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
      // background: #fff;
    }
  }
  @media(max-width:768px){
    justify-content: space-between;
    padding: 0px 5px 8px;
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
  width:10.2%; 
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
export const ResultElement = styled.span`
width: 16%; 
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
  .ub-color_425A70{
    color: #000;
  }
`;

export const FiltersChipsWrapper = styled.div`
  > div {
    margin: 0.4rem;
  }
`;
export const MobileSheet = styled.div`
display: flex;
box-shadow: 0px -3px 6px #7090B01A;
height: 32px;
width: 100%;
margin-top: 10px;
  button{
    display: inline-block;
    width: 50%;
    text-align: center;
    font-size: 14px;
    padding: 8px 32px;
    -webkit-tap-highlight-color: transparent;
  }
`;

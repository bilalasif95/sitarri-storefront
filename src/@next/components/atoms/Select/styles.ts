import { styled } from "@styles";

export const Wrapper = styled.div`
  margin-bottom: 0.7rem;
  .css-kj6f9i-menu{
    .css-11unzgr{
      .css-qtgvzc-option:active{
        background-color: transparent !important;
      }
      // .css-1p6dhz0-option{
      //   background-color: #fff !important;
      //   margin: 0px;
      //   width: 100%;
      // }
    }
    .css-11unzgr div:first-child{
      font-size: 17px;
      font-weight: 700;
    }
    .css-18y29eu-option:active, .css-18y29eu-option:focus{
      background-color: #fff;
      border: none !important;
      outline: none;
    }
  }
@media (max-width: 320px){
  .css-kj6f9i-menu{
    bottom: 0;
    left: -1px;
    position: fixed;
    .css-11unzgr{
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 0;
      .css-f0q9c7-option{
        margin: 0px;
        width: 100%;
      }
    }
    
  }
}
@media (max-width: 425px){
  .css-kj6f9i-menu{
    bottom: 0;
    left: -1px;
    position: fixed;
    .css-11unzgr{
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 0;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      .css-f0q9c7-option{
        margin: 0px;
        width: 100%;
      }
    }
  }
}
@media (max-width: 375px){
  .css-kj6f9i-menu{
    bottom: 0;
    left: -1px;
    position: fixed;
  }
}
@media (max-width: 767px){
  .css-1pcexqc-container{
    position: initial !important;
    .css-kj6f9i-menu{
      top: -2% !important;
      left: -1px;
      position: fixed;
      background: rgb(0 0 0 / 41%);
      z-index: 99999;
      margin-bottom: 0;
    }
  }
}
`;
// margin-bottom: ${props => props.theme.spacing.fieldSpacer};
export const Indicator = styled.div<{ rotate: string }>`
  position: absolute;
  right: 1rem;
  transition-duration: 0.3s;
  transform: ${props =>
    props.rotate === "true" ? "rotate(180deg)" : "rotate(0deg)"};
    
`;

export const HelpText = styled.span`
  color: ${props => props.theme.input.labelColor};
  font-size: ${props => props.theme.input.labelFontSize};
`;

export const ErrorMessages = styled.div`
  top: 100%;
`;

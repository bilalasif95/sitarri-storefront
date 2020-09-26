import { styled } from "@styles";

export const Wrapper = styled.div`
  margin-bottom: 1.4rem;
  @media(max-width:640px){
    margin-bottom: 0;
  }
`;

export const SortLine = styled.div<{ sortby: any }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  padding:10px 14px;
  background: ${props => props.sortby === "Results:" ? "#F6FCF7" : "#fff"};
  border: ${props => `1px solid ${props.sortby === "Results:" ? "#69CD74" : "#f3f0f0"}`};
  border-radius: 50px;
  cursor: pointer;
  span{
    color: ${props => props.sortby === "Results:" ? "#69CD74" : "#7d7d7d"}
    
    .SearchIcon{
      margin-top: 3px;
    }
    div{
      svg{
        fill: ${props => props.sortby === "Results:" ? "#69CD74" : "#EE744D"};
      }
    }
    @media(max-width: 767px){
      margin-right: 5px;
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


export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  position: relative;
  .jlQsbh{
    position: absolute;
    z-index: 2;
    top: 57px;
    right: 0;
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
    padding: 1rem 0;
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
  width:16%; 
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
    width:55%;
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

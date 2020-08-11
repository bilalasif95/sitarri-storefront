import { styled } from "@styles";

export const Wrapper = styled.div`
  margin-bottom: 1.4rem;
  @media(max-width:640px){
    margin-bottom: 0;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  flex-wrap: wrap;
  @media(max-width:768px){
    justify-content: space-between;
    padding: 1rem 0 0;
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
  width:13%; 
  margin: 0 0.7rem;
  path {
    fill: #f3492b;
  }
  @media(max-width:1024px){
    width:17%;
    margin: 0 5px;
  }
  @media(max-width:768px){
    width:30%;
    margin: 0;
  }
  @media(max-width:480px){
    width:47%;
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

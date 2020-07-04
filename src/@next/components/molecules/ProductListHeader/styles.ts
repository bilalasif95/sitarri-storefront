import { styled } from "@styles";

export const Wrapper = styled.div`
  margin-bottom: 1.4rem;
`;

export const Top = styled.div`
  margin-bottom: 1.4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  flex-wrap: wrap;
  @media(max-width:640px){
    justify-content: space-between;
  }
  @media(max-width:424px){
    justify-content: center;
  }
`;

export const Bar = styled.div`
  height: 5rem;
  background-color: ${props => props.theme.tile.backgroundColor};
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-size: ${props => props.theme.typography.smallFontSize};
  margin-top: 1rem;
  margin-bottom: 1.4rem;
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
  width:23%; 
  margin: 0 0.5rem;
  @media(max-width:850px){
    width:30%;
    text-align: center;
  }
  @media(max-width:640px){
    width:45%;
  }
  @media(max-width:424px){
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

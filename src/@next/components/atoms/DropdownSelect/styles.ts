import { styled } from "@styles";

export const Wrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.typography.smallFontSize};
`;

export const SortLine = styled.div<{sortby: any}>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  padding:10px 14px;
  box-shadow: ${props => props.sortby === "More" ? "-5px 0px 9px #bbb9b8d1" : ""};
  -webkit-box-shadow: ${props => props.sortby === "More" ? "-5px 0px 9px #bbb9b8d1" : ""};
  background: ${props => props.sortby === "Results:" ? "#F6FCF7" : "#fff"};
  border: ${props => props.sortby === "More" ? "" : `1px solid ${props.sortby === "Results:" ? "#69CD74" : "#f3f0f0"}` };
  border-radius: ${props => props.sortby === "More" ? "3px" : "50px"};
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
    padding: ${props => props.sortby === "Results:" ? "3px 10px" : props.sortby === "More" ? "10px 14px" : "4px 10px"};
    margin-right: ${props => props.sortby === "More" ? "0px" : "10px"};
}
`;

export const Value = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Indicator = styled.div<{ rotate: string }>`
  right: 1rem;
  transition-duration: 0.3s;
  transform: ${props =>
    props.rotate === "true" ? "rotate(180deg)" : "rotate(0deg)"};
`;

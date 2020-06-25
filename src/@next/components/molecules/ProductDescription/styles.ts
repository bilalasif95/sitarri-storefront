import { media, styled } from "@styles";

export const Wrapper = styled.div``;

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

export const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #fff;
  margin: 0 0 1rem;
  border-radius: 5px;
  overflow: hidden;
  padding: 1rem;
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
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: ${props => props.active && props.theme.colors.tabTitle};
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  text-align: center;
  background: ${props => props.active ? '#f74b2c' : 'none'};
  border-radius: 5px;

  ${media.smallScreen`
    font-size: ${(props: any) => props.theme.typography.h4FontSize};
    min-width: 150px;
    margin-right: 20px;
  `};
`;

export const AttributeName = styled.span`
  color: ${props => props.theme.colors.listAttributeName};
`;

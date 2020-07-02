import { media, styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: left;
`;
export const Wrapper = styled.div`
  padding: 1rem
`;
export const Top = styled.div`
  background: #fff;
  transition: 0.3s;
  border-radius: 5px;
  overflow: hidden;
  // box-shadow: 0 0 8px rgba(78, 0, 79, 0.24);

  // :hover {
  //   background-color: ${props => props.theme.colors.hoverLightBackground};
  // }

  // ${media.largeScreen`
  //   padding: 1.8rem;
  // `}
`;

export const Bottom = styled.div`
  border-radius: 5px;
  padding: 1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top:  1px solid #ddd;
  // box-shadow: 0 0 8px rgba(78, 0, 79, 0.24);
`;

export const Content = styled.div`
  padding: 1rem;
  position: relative;
`;

export const Link = styled.div`
  position: absolute;
  top: -1rem;
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
`;

export const Price = styled.p`
  font-size: 12px
  color: #ff7f56;
  text-align: left;
`;

export const Image = styled.div`
  width: 100%;
  height: 180px;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  > img {
    // width:100%;
  }
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
`;


export const Left = styled.div`
  width: 80%;
`;

export const Right = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Imgbox = styled.div`
  overflow: hidden;
  img{
    width: 100%;
    border-radius: 5px;
  }
`;

export const Timing = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`;

export const Open = styled.p`
  font-size: 12px
  color: #1fa300;
  text-align: left;
  margin: 0 0.5rem 0 0;
`;

export const Close = styled.p`
  font-size: 12px
  color: #666;
  text-align: left;
  display: flex;
  align-items: center;
  span{
    width:2px;
    height: 2px;
    display: block;
    background: #666;
    margin: 0 0.5rem 0 0;
  }
`;

export const Likes = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`;

export const Nos = styled.p`
  font-size: 12px
  color: #ff4b13;
  text-align: left;
  margin: 0 0.5rem 0 0;
`;

export const Stars = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: 0 3px;
svg{
  margin: 0 1px;
  fill: #ff4b13;
}
svg:last-child{
  fill: #ffede7;
}
`;

export const Location = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  margin: 0 0.5rem 0 0;
  fill: #000;
}
`;

export const Miles = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Distance = styled.p`
  font-size: 12px
  color: #666;
  text-align: left;
  margin: 0 1rem 0 0;
`;

export const Address = styled.p`
  font-size: 12px
  color: #666;
  text-align: left;
`;





import { styled } from "@styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h3 {
    font-weight: ${props => props.theme.typography.boldFontWeight};
    text-transform: capitalize;
    margin: 0 0 1rem;
  }

  p {
    color: ${props => props.theme.colors.lightFont};
    padding: 0 1rem;
  }

  @media(max-width:480px){
    form{
      width: 100%;
      padding: 0 1rem;
    }
  }
`;

export const GeneralError = styled.p`
  color: ${props => props.theme.colors.error} !important;
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto ;
  position: relative;

  .passwordEye {
    height: 49px;
    border-left: 1px solid #cccccc78;
    width: 40px;
    cursor: pointer;
    padding: 0.7rem 0.3rem;
    position: absolute;
    right: 0;
}
`;

// export const PasswordInput = styled.div`
//   position: relative;

//   .passwordEye {
//     height: 49px;
//     border-left: 1px solid #cccccc78;
//     width: 40px;
//     cursor: pointer;
//     padding: 0.7rem 0.3rem;
//     position: absolute;
//     right: 0;
// }
// `;

export const Btn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;

  button{
    width: 100%;
    border-radius: 4px;
    background: #f74b2c;
    color: #fff;
    text-transform: capitalize;
    box-shadow: none ;
  }
  button:hover{
    background: #f74b2c;
  }
`;

import { media, styled } from "@styles";

export const ProductList = styled.div`
  margin: 0 0 1rem;
  h3{
    padding: 1rem 0 1rem 2rem
  }
  ${media.smallScreen`
  h3{
    padding: 0;
    font-size: 1rem;
  }
`}
`;
export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;

  ${media.largeScreen`
    grid-template-columns: 1fr 1fr;
    grid-gap: ;
  `}

  ${media.smallScreen`
    grid-template-columns: 1fr;
    grid-gap: ;
  `}
`;

export const Loader = styled.div`
  text-align: center;
  margin: 2.5rem 0;
`;

export const NoResult = styled.div`
  text-align: center;
`;
import styled from 'styled-components'

export const SectionCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;

  @media screen and (min-width: 1200px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  }
`
export const MenuItem = styled.article`
  display: grid;
  gap: 1rem 2rem;
  max-width: 25rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 225px 1fr;
    gap: 0 1.25rem;
    max-width: 40rem;
  }

  img {
    object-fit: cover;
  height: 200px;
  width: 100%;
  border: 0.25rem solid #c59d5f;
  border-radius: 0.25rem;
  display: block;

  @media screen and (min-width: 768px) {
    height: 175px;
  }

  @media screen and (min-width: 1200px) {
    height: 150px;
  }
  }

  div {
    h4 {
      margin-bottom: 0.5rem;
    }
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px dotted hsl(210, 22%, 49%);
`
export const Price = styled.h4`
  color: #c59d5f;
`
// export const Container = styled.div`
  
// `

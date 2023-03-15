import styled from 'styled-components'

export const Main = styled.main`

`
export const Section = styled.section`
  padding: 5rem 0;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
  width: 95vw;
}
`
export const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    margin-top: 0;
  }

  div {
  width: 5rem;
  height: 0.25rem;
  background: #c59d5f;
  margin-left: auto;
  margin-right: auto;
  }
`
// export const Container = styled.div`
  
// `

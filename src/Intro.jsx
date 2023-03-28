import styled from 'styled-components'
import { FormComponent as Form } from './Form'

const Container = styled.div`
  box-sizing: border-box;
  min-width: 375px;
  font-family: Poppins;
  color: white;
  padding: 70px 30px 37px;
  @media (min-width: 600px) {
    max-width: 1440px;
    min-height: 100vh;
    padding-inline: 12.083vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    align-content: center;
    align-items: center;
    column-gap: 50px;
  }
  @media (max-width: 810px) {
    padding: 70px 30px 37px;
  }
`

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 27px;
  line-height: 36px;
  @media (min-width: 600px) {
    text-align: start;
    font-weight: 700;
    line-height: 3.611vw;
    font-size: 3.333vw;
    margin-bottom: 1.042vw;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 1;
    align-self: end;
  }
`

const Text = styled.p`
  font-weight: 400;
  margin-bottom: 63px;
  line-height: 26px;
  @media (min-width: 600px) {
    text-align: start;
    line-height: 1.806vw;
    font-size: 1.111vw;
    margin-bottom: 7.361vw;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 1;
    align-self: start;
  }
`

const Card = styled.div`
  font-weight: 400;
  padding: 18px;
  background: hsl(248, 32%, 49%);
  border-radius: 10px;
  box-shadow: 0px 8px 1px 0px #0000001f;
  margin-bottom: 26px;
  > span {
    font-weight: 600;
  }
  @media (min-width: 600px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;
  }
`
const FormContainer = styled(Card)`
  background: white;
  padding: 24px;
  @media (min-width: 600px) {
    padding: 2.778vw;
    margin: 0;
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 2;
  }
`

export const Intro = () => {
  return (
    <Container>
      <Title>Learn to code by watching others</Title>
      <Text>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </Text>
      <Card>
        <span>Try it free 7 days</span> then{' '}
        {window.innerHeight <= 375 ? <br /> : ''}$20/mo. thereafter
      </Card>
      <FormContainer>
        <Form />
      </FormContainer>
    </Container>
  )
}

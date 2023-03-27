import styled from 'styled-components'
import introBg from './assets/bg-intro-mobile.png'
import { SubForm } from './SubForm'

const Container = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 1000px;
  background: url(${introBg}), hsl(0, 100%, 74%);
  font-family: Poppins;
  color: white;
  padding: 30px;
`

const Title = styled.h2`
  text-align: center;
  font-weight: 700;
`

const Text = styled.p`
  font-weight: 500;
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
`
const FormContainer = styled(Card)`
  background: white;
  padding: 24px;
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
        <span>Try it free 7 days</span> then
        <br /> $20/mo. thereafter
      </Card>
      <FormContainer>
        <SubForm />
      </FormContainer>
    </Container>
  )
}

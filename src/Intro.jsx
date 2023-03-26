import styled from 'styled-components'
import introBg from './assets/bg-intro-mobile.png'

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

export const Intro = () => {
  return (
    <Container>
      <Title>Learn to code by watching others</Title>
      <Text>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </Text>
    </Container>
  )
}

import styled, { keyframes } from 'styled-components'
import { ReactComponent as ErrorIcon } from './assets/icon-error.svg'
import { useFormik } from 'formik'
import { useRef, useState } from 'react'

const buzzOutKeyFrame = keyframes`
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    font-family: Poppins;
    box-sizing: border-box;
  }
  > *:not(div) {
    border-radius: 6px;
    margin-top: 17px;
  }
`

const Input = styled.input`
  padding: 17px;
  background: #ffffff;
  border: 1px solid #dddddd;
  font-weight: 800;
  &:first-child {
    margin-top: 0;
  }
  &:focus-visible {
    outline: #dddddd solid 2px;
  }
  &.error {
    animation: ${buzzOutKeyFrame} 0.75s linear 1;
  }
  &.redOut {
    border: rgba(255, 122, 122, 0.5) solid 2px;
    &::placeholder {
      color: rgba(255, 122, 122, 0.5);
    }
  }
`

const Button = styled.button`
  border: 0;
  padding: 16px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 500;
  color: white;
  background: hsl(154, 59%, 51%);
  border: 1px solid #45a97e63;
  box-shadow: rgb(0 0 0 / 9%) 0px -3px 0px 0px inset;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;

  &:active {
    transform: scale(0.9);
  }
  &:hover {
    background: #34bd82;
  }
`

const ErrorMsg = styled.div`
  position: relative;
  color: red;
  font-style: italic;
  font-size: 11px;
  text-align: end;
`
const ErrIcon = styled(ErrorIcon)`
  position: absolute;
  top: -41px;
  right: 15px;
  &.error {
    animation: ${buzzOutKeyFrame} 0.75s linear 1;
  }
`

const AgreementInfo = styled.div`
  color: hsl(246, 25%, 77%);
  font-size: 10px;
  padding-inline: 19px;
  line-height: 20px;
  > a {
    all: unset;
    font-weight: 700;
    font-size: 10.5px;
    color: hsl(0, 100%, 74%);
    cursor: pointer;
  }
`

const validate = (values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'First Name cannot be empty'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name cannot be empty'
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less'
  }

  if (!values.email) {
    errors.email = 'Email cannot be empty'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Looks like this is not an email'
  }

  if (!values.password) {
    errors.password = 'Password cannot be empty'
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less'
  }

  return errors
}

const turnErrorAnim = (setState) => {
  setState('error')
  setTimeout(() => setState(''), 1000)
}

export const SubForm = () => {
  const formRef = useRef(null)
  const [errorClass, setErrorClass] = useState('')

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit} ref={formRef}>
      <Input
        name="firstName"
        type="text"
        className={
          formik.touched.firstName && formik.errors.firstName
            ? `redOut ${errorClass}`
            : ''
        }
        placeholder="First Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <ErrorMsg>
          {formik.errors.firstName}
          <ErrIcon className={errorClass} />
        </ErrorMsg>
      ) : null}

      <Input
        name="lastName"
        type="text"
        className={
          formik.touched.lastName && formik.errors.lastName
            ? `redOut ${errorClass}`
            : ''
        }
        placeholder="Last Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <ErrorMsg>
          {formik.errors.lastName}
          <ErrIcon className={errorClass} />
        </ErrorMsg>
      ) : null}

      <Input
        name="email"
        type="email"
        className={
          formik.touched.email && formik.errors.email
            ? `redOut ${errorClass}`
            : ''
        }
        placeholder="Email Address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <ErrorMsg>
          {formik.errors.email}
          <ErrIcon className={errorClass} />
        </ErrorMsg>
      ) : null}

      <Input
        name="password"
        type="password"
        className={
          formik.touched.password && formik.errors.password
            ? `redOut ${errorClass}`
            : ''
        }
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <ErrorMsg>
          {formik.errors.password}
          <ErrIcon className={errorClass} />
        </ErrorMsg>
      ) : null}

      <Button
        type="submit"
        onClick={() => {
          if (!errorClass) turnErrorAnim(setErrorClass)
        }}
      >
        {'Claim your free trial'.toUpperCase()}
      </Button>
      <AgreementInfo>
        By clicking the button, you are agreeing to our{' '}
        <a href="/#">Terms and Services</a>
      </AgreementInfo>
    </Form>
  )
}

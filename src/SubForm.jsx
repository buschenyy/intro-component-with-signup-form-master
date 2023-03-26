import styled from 'styled-components'
import { useFormik } from 'formik'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    font-family: Poppins;
    box-sizing: border-box;
  }
  > *:not(div) {
    border-radius: 6px;
    font-weight: 500;
    margin-top: 17px;
  }
`

const Input = styled.input`
  padding: 17px;
  background: #ffffff;
  border: 1px solid #dddddd;
  &:first-child {
    margin-top: 0;
  }
`

const Button = styled.button`
  border: 0;
  padding: 16px;
  margin-bottom: 10px;
  font-size: 15px;
  color: white;
  background: hsl(154, 59%, 51%);
  border: 1px solid #3b916c64;
  box-shadow: rgb(0 0 0 / 9%) 0px -3px 0px 0px inset;
  cursor: pointer;
`

const ErrorMsg = styled.div`
  color: red;
  font-style: italic;
  font-size: 11px;
  text-align: end;
`

const AgreementInfo = styled.div`
  color: hsl(246, 25%, 77%);
  font-size: 10px;
  padding-inline: 19px;
  line-height: 20px;
  > a {
    all: unset;
    font-weight: 600;
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

export const SubForm = () => {
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
    <Form onSubmit={formik.handleSubmit}>
      <Input
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <ErrorMsg>{formik.errors.firstName}</ErrorMsg>
      ) : null}

      <Input
        name="lastName"
        type="text"
        placeholder="Last Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <ErrorMsg>{formik.errors.lastName}</ErrorMsg>
      ) : null}

      <Input
        name="email"
        type="email"
        placeholder="Email Address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <ErrorMsg>{formik.errors.email}</ErrorMsg>
      ) : null}

      <Input
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <ErrorMsg>{formik.errors.password}</ErrorMsg>
      ) : null}

      <Button type="submit">{'Claim your free trial'.toUpperCase()}</Button>
      <AgreementInfo>
        By clicking the button, you are agreeing to our{' '}
        <a href="/#">Terms and Services</a>
      </AgreementInfo>
    </Form>
  )
}

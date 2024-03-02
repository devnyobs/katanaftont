import * as Yup from 'yup'

export const Loginvalidation = Yup.object().shape({
    email:Yup.string().email("please enter valid email").required(),
    password: Yup.string().min(8).required("the password is incorrect")
})
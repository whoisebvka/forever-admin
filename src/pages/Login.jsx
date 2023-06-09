import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { login } from '../features/auth/authSlice';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  let schema = Yup.object().shape({
    email: Yup.string().email('Email should be valid').required('Email is required'),
    password: Yup.string().required("Password is required"),
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values))
    },
  });

  const authState = useSelector((state) => state);

  const{ user, isLoading, isError, isSuccess, message } = authState.auth
  
  useEffect(() => {
    if ( isSuccess) {
      navigate("admin");
    } else {
      navigate("")
    }
  }, [user, isLoading, isError, isSuccess ])
  

  return (
    <div className='py-5' style={{"background": "#ffd333", minHeight: "100vh"}}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> 
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className='text-center'>Login</h3>
        <p className='text-center'>Login to your accounnt to continue </p>
        <div className="error text-center">
          {message.message === "Rejected" ? "You are not an Admin" : ""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput 
              type="text" 
              name="email" 
              label="Email Address" 
              id="email" 
              val={formik.values.email} 
              onCh={formik.handleChange("email")}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <CustomInput 
              type="password" 
              name="password" 
              label="Passsword" 
              id="pass"  
              val={formik.values.password} 
              onCh={formik.handleChange("password")}
          />
          <div className="error">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className='mb-3 text-end'>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none'
            style={{ background: "#ffd333"}}
            type='submit'
          >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
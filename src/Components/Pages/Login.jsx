import React from 'react'
import {Link} from 'react-router-dom';
import {useLocation} from "react-router-dom"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';


const Login = () => {
  const ubicacion =useLocation();

  const handleUbicacion = async (e) => {
     
    try{
      
      const res = await fetch(`http://localhost:4000${ubicacion.pathname}`);
      const result = await res.json();

      console.log(result.mensaje)

    
  } catch(error){
    console.log(error);
  }
  }

  handleUbicacion();

  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1"></h4>
            </div>

            <p>Please login to your account</p>


            <MDBInput wrapperClass='mb-4' label='User' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
              <Link to="/Rescontra"><a className="text-muted" href="#!">Forgot password?</a></Link>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Link to="/Registro"><MDBBtn outline className='mx-2' color=''>
                Register
              </MDBBtn></Link>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

export default Login
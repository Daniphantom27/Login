import React from 'react'
import {useLocation} from "react-router-dom"
import {Link} from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

const Registro = () => {
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

            <p>Please Register your account</p>


            <MDBInput wrapperClass='mb-4' label='User' id='form1' type='user'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
            <MDBInput wrapperClass='mb-4' label='Name' id='form3' type='Name'/>
            <MDBInput wrapperClass='mb-4' label='Lastname' id='form4' type='lastname'/>
            <MDBInput wrapperClass='mb-4' label='Email Address' id='form5' type='email'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">REGISTER</MDBBtn>

            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

export default Registro
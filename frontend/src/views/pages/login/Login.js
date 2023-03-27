import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { CCol, CContainer, CRow } from "@coreui/react";
import { AxiosApi } from "src/contents/AxiosApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [pType, setPType] = useState(true);

  const handleSubmit = () => {
    console.log(email);
    console.log(password);


    if(email !== '' && password !== ''){
      // call api
      const sendLoginInfo = AxiosApi.Login({email, password})

      console.log(sendLoginInfo)
    }else{
      setError('Email & Password can not be empty, both fields are required.');
    }




  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <h2>Enter Correct Details to Login</h2>
            {
              error && error
            }
            <form>
              <div className="form-group">
                <label>Enter your email</label> <br />
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
        
              </div>
              <label>Enter your password</label> <br />
              <div className="input-group mb-3">
             
                <input
                  type={pType ? 'password' : 'text'}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <button className="input-group-text" id="basic-addon2" onClick={() => setPType(!pType)}>
                    View
                  </button>
                </div>
              </div>
              <button
                className="btn btn-primary btn-lg btn-block col-md-12"
                onClick={handleSubmit}
              >
                Login
              </button>
              Forgot Password Click Here
            </form>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;

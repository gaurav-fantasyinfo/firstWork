
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { CCol, CContainer, CRow } from "@coreui/react";
import { AxiosApi } from "src/contents/AxiosApi";



export default function AdminUsers() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [image, setImage] = useState("");
  
    const handleSubmit = () => {
      console.log(email);
      console.log(firstName);
      console.log(lastName);
      console.log(image);
    
    //   if(email !== '' ){
    //     // call api
    //     const sendLoginInfo = AxiosApi.Login({email})
  
    //     console.log(sendLoginInfo)
    //   }else{
    //     setError('Email & Password can not be empty, both fields are required.');
    //   }
  
  
  
  
    };


  return (
    <div className="bg-light d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
          
            {
              error && error
            }
            <form>
            <div className="form-group my-2">
                <label>Enter First Name</label> <br />
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
        
              </div>
              <div className="form-group  my-2">
                <label>Enter Last Name</label> <br />
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
        
              </div>
              <div className="form-group  my-2">
                <label>Enter your email</label> <br />
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
        
              </div>
              <label>Profile Image</label> <br />
              <div className="input-group mb-3">
             
                <input
                  type='file'
                  className="form-control"
                  onChange={(e) => console.log(e.target.value)}
                  required
                />
              
              </div>
              <img src={image} height={100} width={100} className='img-responsive' />
              <button
                className="btn btn-primary btn-lg btn-block col-md-12"
                onClick={handleSubmit}
              >
               Add New Admin User
              </button>
             
            </form>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

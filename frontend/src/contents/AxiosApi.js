
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/';


//  login function
const Login = async data => {
    let returnObj = {};
    try {
      const login = await axios.post(`${BASE_URL}login`, data, {
        headers: {
          contentType: 'application/json',
        },
      });
  
      console.log(login.data)
      if (login.data.statusCode === 200) {
        returnObj = {
          loginStatus: true,
          loginUserData: login.data.data,
        };
        return returnObj;
      } else {
        returnObj = {
          loginStatus: false,
          errorMessage: login.data.message,
        };
        return returnObj;
      }
    } catch (error) {
      returnObj = {
        loginStatus: false,
        errorMessage: error.message,
      };
  
      return returnObj;
    }
  };


export const  AxiosApi = {
    Login,
}
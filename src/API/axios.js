import axios from "axios";
// import { setErrorMessage } from '../redux/postSlice';
// import { store } from '../index'

const instance = axios.create({
  baseURL: "https://front-test.beta.aviasales.ru",
  timeout: 5000,
  // headers: { "Content-type": "application/json" },
});

// instance.interceptors.request.use((instance) => {
//   const jwtToken = localStorage.getItem("token");
//   if (jwtToken) {
//     instance.headers["Authorization"] = `Bearer ${jwtToken}`;
//   }
//   return instance;
// });

// instance.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//     // store.dispatch(setErrorMessage(error.response.data.error[0].message));
//     // store.dispatch(user.actions.setUserName('eric'))
    
//     store.dispatch(setErrorMessage(error.response.data.error[0].message || error.response.data.error));
//     return Promise.reject(error);
// });

export default instance;
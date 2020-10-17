import axios from "axios";

axios.defaults.baseURL = "https://api.chucknorris.io/jokes/random";

axios.interceptors.request.use(null, (error) => {
  console.log("Error", error);
  return Promise.reject(error);
});

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Error", error);
    alert("An Unexpected Error Occured.......");
  }
  return Promise.reject("Error");
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

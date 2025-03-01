import axios from 'axios';

const axiosInstance = axios.create({
  
  //local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-5fd47/us-central1/api",

  //Deployed version of firebase functions
  baseURL: "https://api-bravham5bq-uc.a.run.app/",

  //Deployed version of amazon server on react render.com
  // baseURL: "https://amazone-api-deploy-i5j7.onrender.com/",
});

export {axiosInstance};

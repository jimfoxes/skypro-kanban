import axios from 'axios'

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
   try {
      const data = await axios.post(
         API_URL + "/login",
         { login, password },
         {
         headers: {
            "Content-Type": "",
         },
      }
   );
   return data.data.user;
   } catch (error) {
      console.log(error);
      throw new Error(error.response.data.error);
  }
}

export async function signUp({ name, login, password }) {
   try {
      const data = await axios.post(
         API_URL,
         { login, name, password },
         {
         headers: {
            "Content-Type": "",
         },
      }
   );
   return data.data.user;
   } catch (error) {
      console.log(error);
      throw new Error(error.response.data.error);
  }
}
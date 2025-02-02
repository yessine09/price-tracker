import instanceAxios from "../configs/axios";

const AUTH_ENDPOINT = "/auth";
const USERS_ENDPOINT = "/users";

//SignIn
const signin = async (userData) => {
  return await instanceAxios.post(`${AUTH_ENDPOINT}/signIn`, userData);
};

//Logout
const logout = async (token) => {
  return await instanceAxios.get(`${AUTH_ENDPOINT}/logout`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//ADD User
const addUser = async (userData) => {
  return await instanceAxios.post(`${USERS_ENDPOINT}/add`, userData);
};

export default {
  signin,
  logout,
  addUser,
};

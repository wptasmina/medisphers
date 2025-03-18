export const saveTokenToLocalStorage = (token) => {
    localStorage.setItem("auth_token", token);
  };
  
  export const getTokenFromLocalStorage = () => {
    return localStorage.getItem("auth_token");
  };
  
  export const removeTokenFromLocalStorage = () => {
    localStorage.removeItem("auth_token");
  };
  
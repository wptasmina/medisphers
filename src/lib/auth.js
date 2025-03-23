export const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  try {
    // Try to decode the JWT token (you can use `jwt-decode` or other libraries if needed)
    const decoded = jwt.decode(token);
    // Check if the token has expired
    if (decoded && decoded.exp * 1000 < Date.now()) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

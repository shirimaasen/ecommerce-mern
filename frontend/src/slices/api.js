export const url = "https://ecommerce-premium.herokuapp.com/api";
// export const url = "http://localhost:5001/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};

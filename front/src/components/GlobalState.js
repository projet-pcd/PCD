import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import UserApi from "./UserApi";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        const res = await axios.get("/user/refresh_token");

        setToken(res.data.accesstoken);
        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
      setLoading(false);
    }
  }, []);

  const state = {
    token: [token, setToken],
    loading: [loading, setLoading],
    userApi: UserApi(token),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

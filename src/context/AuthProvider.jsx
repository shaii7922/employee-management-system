import React, { createContext, useEffect, useState } from "react";
import {
  getAuthUser,
  getLocalStorage,
  setLocalStorage,
} from "../utils/LocalStorage";
import { getTaskCount } from "../utils/commonUtilis";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  //by doing authcontext and creating autprovider we can send the data globally
  const [loading, setLoading] = useState(true);
  const [authData, setAuthData] = useState({
    employees: "",
    admin: "",
    userRole: null,
  });

  useEffect(() => {
    // 1st local me data send krna h

    if (!localStorage.getItem("employe")) {
      setLocalStorage();
    }
    // 2nd Local se data get krna h
    const data = getLocalStorage();
    const savedAuth = getAuthUser();

    // CALL the util getTaskCount
    const employeesWithTaskCount = data.employees?.map((emp) => ({
      ...emp,
      taskCount: getTaskCount(emp.tasks),
    }));
    setAuthData((prev) => ({
      ...prev,
      employees: employeesWithTaskCount,
      admin: data.admin,
      userRole: savedAuth?.role ?? null,
      currentUser: savedAuth?.user ?? null,
    }));
    setLoading(false);
  }, []);
  //   console.log("daaaa", authData);
  if (loading) return null; // or loader
  return (
    <div>
      <AuthContext.Provider value={{ authData, setAuthData }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

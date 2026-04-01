import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard";
import { AuthContext } from "./context/AuthProvider";
import { clearAuthUser, getAuthUser, setAuthUser } from "./utils/LocalStorage";
import { toast } from "react-toastify";

const App = () => {
  //null means something had inside not empty
  //  let [userRole, setuserRole] = useState(null);

  const { authData, setAuthData } = useContext(AuthContext);
  const { employees, admin, userRole } = authData;
  // console.log("  ",authData);

  const handleLogin = (email, password) => {
    const checkEmployee = employees.find((e) => {
      return e.email === email && e.password === password;
    });

    if (checkEmployee) {
      setAuthUser({
        role: "employee",
        user: checkEmployee,
      });
      return setAuthData((prev) => ({
        ...prev,
        userRole: "employee",
        currentUser: checkEmployee,
      }));
    }
    const checkAdmin = admin.find((e) => {
      return e.email === email && e.password === password;
    });
    if (checkAdmin) {
      setAuthUser({
        role: "admin",
        user: checkAdmin,
      });

      return setAuthData((prev) => ({
        ...prev,
        userRole: "admin",
        currentUser: checkAdmin,
      }));
    }

    if (!checkEmployee && !checkAdmin) {
      toast.error("Wrong email or password");
    }
  };
  const handleLogout = () => {
    clearAuthUser();
    setAuthData((prev) => ({ ...prev, userRole: null, currentUser: null }));
  };

  useEffect(() => {
  const storedAuth = getAuthUser();

  if (storedAuth) {
    setAuthData((prev) => ({
      ...prev,
      userRole: storedAuth.role,
      currentUser: storedAuth.user,
    }));
  }
}, []);

  return (
    <>
      {!userRole ? <Login handleLogin={handleLogin} /> : ""}
      {userRole === "admin" && (
        <AdminDashBoard
          onLogout={handleLogout}
          authData={authData}
          setAuthData={setAuthData}
        />
      )}
      {userRole === "employee" && (
        <EmployeeDashBoard onLogout={handleLogout} authData={authData} setAuthData={setAuthData}/>
      )}
    </>
  );
};

export default App;

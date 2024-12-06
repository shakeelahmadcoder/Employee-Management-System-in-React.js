import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashbaord from './components/Dashboard/EmployeeDashbaord'
import { AuthContext } from './components/Context/AuthProvider'

const App = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  }, [])


  { console.log(userData) }
  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin") {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    }
    else if (userData) {
      const employee = userData.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser("employee")
        setloggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
      }
    }
  }
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : (user === "employee" ? <EmployeeDashbaord changeUser={setUser} data={loggedInUserData} /> : null)}
    </div>
  )
}

export default App
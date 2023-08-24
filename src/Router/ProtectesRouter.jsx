import { Navigate, Outlet } from "react-router-dom"
import Swal from "sweetalert2";


const ProtectesRouter = () => {

    let isLogget = localStorage.getItem("token")

    if(!isLogget){
      Swal.fire({
        title: "Inicia sesion primero",
        icon: "error",
        background: "rgba(0, 0, 0, 0.969)",
        color: "#fff",
        confirmButtonColor: "#003049",
      });
      return <Navigate to="/login"/>
    }

  return (
    <Outlet/>
  )
}

export default ProtectesRouter

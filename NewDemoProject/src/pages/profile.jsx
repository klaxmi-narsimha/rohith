import { Link } from "react-router-dom"
import Count from "../components/count.jsx";
function Profile(){
    return(
        <>
        <h1>profile</h1>
        <Count/>
        <Link to="/login">
        <h3>logout</h3>
        </Link>
       
        </>
    )
}
export default Profile
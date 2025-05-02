import { useNavigate } from "react-router-dom";
import errorImg from "../img/404.png";

const NotFound = () => {
  let navigate = useNavigate()
  return (
    <div className="container text-center mt-4">
      <img className="w-75" src={errorImg} alt="" />
      <div>
        <button className="btn btn-success" onClick={()=>navigate(-1)}>Go Back</button>
        <button className="btn btn-warning me-2 mx-2" onClick={()=>navigate("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default NotFound;

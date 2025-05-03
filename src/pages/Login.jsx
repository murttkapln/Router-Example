import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email,password);
    setUser({ password, email });
    sessionStorage.setItem("user", JSON.stringify({ email, password }));
    navigate(-1);
    alert("Login Success");
  };
  return (
    <div className="container  bg-body-tertiary mt-4 w-50  rounded-2">
      <form onSubmit={handleSubmit}>
        <h4 className="text-center fst-italic rounded-2 bg-warning">LOGIN</h4>
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success w-50">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

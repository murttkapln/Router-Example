import { Link, Outlet } from "react-router-dom";

const Paths = () => {
  return (
    <div className="container mt-4 text-start bg-light rounded-2">
      <h1>
        Online IT Courses to Become a Qualified IT Professional
        <span className="text-danger lh-sm fst-italic   font-monoscope">
          {" "}
          with Clarusway
        </span>
      </h1>
      <p>
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success!{" "}
      </p>
      <div className="text-center">
        <Link to="fullstack" className="btn btn-success w-25">
          FullStack
        </Link>
        <Link to="aws" className="btn btn-warning w-26 mx-2">
          AWS/DevOps
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default Paths;

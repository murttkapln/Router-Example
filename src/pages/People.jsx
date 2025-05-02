import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);
  let navigate = useNavigate()

  const getPeople = () => {
    const API_KEY = "reqres-free-v1";
    fetch(`https://reqres.in/api/users?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPeople();
  }, []);
  console.log(setPeople);

  return (
    <div className=" container  bg-body-tertiary text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center g-3">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div
              key={id}
              className="  w-50 col-sm-12 col-md-6 col-lg-4"
            >
              <img role="button" className="rounded" src={avatar} alt="img" onClick={()=>navigate(`${id}`,{state:person})} />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
            
          );
        })}
      </div>
      <div>
        <button className="btn btn-sm btn-success" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button
          className="mx-2 btn btn-sm btn-warning"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default People;

import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import spinner from "../img/Spinner-2.gif";

const PersonDetail = () => {
  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  // let { state: person } = useLocation();
  let navigate = useNavigate();
  let { id } = useParams();
  const API_KEY = "reqres-free-v1";
  
  useEffect(() => {
    const getPersonById = () => {
      axios
        // .get(`https://reqres.in/api/users/${id}?api_key=${API_KEY}`
        .get(`https://reqres.in/api/users/${id}`, {
          headers: {
            "x-api-key": API_KEY,
          },
        })
        .then((res) => setPerson(res.data.data))
        .catch((err) => {
          setError(true);
          console.log(err);
        })
        .finally(() => setLoading(false));
    };
    getPersonById();
  }, [id]);
  if (error) {
    return <NotFound />;
  } else if (loading) {
    return (
      <div className="mt-4 text-center ">
        <img src={spinner} alt="spinner" />
      </div>
    );
  }

  return (
    <div className="container w-50 mt-4 p-5  bg-body-tertiary text-center">
      <img className="rounded" src={person.avatar} alt="img" />
      <h6>
        {person.first_name} {person.last_name}
      </h6>
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

export default PersonDetail;

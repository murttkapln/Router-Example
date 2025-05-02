import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import People from "../pages/People";
import NotFound from "../pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Paths from "../pages/Paths";
import PersonDetail from "../pages/PersonDetail";
import Fullstack from "../pages/Fullstack";
import Aws from "../pages/Aws";
import React from "../pages/React";
import Next from "../pages/Next";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import { useState } from "react";

const AppRouter = () => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );
  return (
    <div>
      <Nav user={user} setuser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRouter user={user} />}>
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />
        </Route>
        <Route path="/paths" element={<Paths />}>
          <Route index element={<Fullstack />} />
          <Route path="fullstack" element={<Fullstack />}>
            <Route index element={<React />} />
            <Route path="react" element={<React />} />
            <Route path="next" element={<Next />} />
          </Route>
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;

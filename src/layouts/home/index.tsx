import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import ComplexNavbar from "components/navbar/home_navbar";
import Presentation from "views/Home/presentation";

const Home = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-full w-full bg-lightPrimary dark:!bg-sky-900">
          <div className="h-full">
            <ComplexNavbar />
            <Presentation />
          </div>
      </div>
    </div>
  );
}

export default Home;
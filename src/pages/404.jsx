import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/about", { relative: "path" });
    }, 5000);

    const navigationId = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);
    return () => {
      clearTimeout(timerId);
      clearInterval(navigationId);
    };
  }, []);
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>404</h1>
      <h2>Вас перенесут назад через {timer}</h2>
      <Link to="/">Go back</Link>
    </div>
  );
};

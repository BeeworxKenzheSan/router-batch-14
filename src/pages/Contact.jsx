import React, { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";

export const Contact = () => {
  const id = useParams();
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const getContact = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id["hasan-aka"]}`
    );
    const result = await response.json();

    if (!response.ok) {
      navigate("..", { relative: "path" });
    }
    setContact(result);
  };

  useEffect(() => {
    getContact();
  }, [id]);

  return (
    <div>
      <div>
        <h2>Contact</h2>
        <button onClick={() => navigate(-1)}>Go back</button>
        {contact === "" ? <p>Loading....</p> : <div>{contact.name}</div>}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Contacts = () => {
  const [cont, setCont] = useState([]);

  const getContactsRequest = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const contacts = await response.json();
    setCont(contacts);
  };

  useEffect(() => {
    getContactsRequest();
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
      >
        {cont.map((person) => (
          <li key={person.name}>
            <img
              alt=""
              src={person.imageUrl}
              className="mx-auto h-20 w-20 rounded-full bg-red-400"
            />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
              {person.name}
            </h3>
            <p className="text-sm leading-6 text-gray-600">{person.id}</p>
            <button>
              <Link to={`${person.id}`}>View</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

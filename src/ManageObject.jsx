import React, { useState } from 'react';

const ManageObject = () => {
  const [user, setUser] = useState({
    name: '',
    age: 0,
    email: 'test@gmail.com',
    password: 'test',
  });

  const changename = (event) => {
    setUser({ ...user, name: event.target.value });
  };

  const changeAge = (event) => {
    setUser({ user, age: event.target.value });
  };
  return (
    <div>
      <h1>Object</h1>
      <input onChange={changename} type='text' placeholder='name' />
      <input onChange={changeAge} type='number' placeholder='age' />
      <p>Name: {user.name}</p>

      <p>Age: {user.age}</p>
    </div>
  );
};

export default ManageObject;

import React, { useState } from 'react';

function UserDataForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [userData, setUserData] = useState([]);
  localStorage.setItem('userData', JSON.stringify(userData));
    

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDataObject = {
      name: name,
      email: email,
      age: age
    };

    setUserData(...userData ,userDataObject);

    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <div className="userDataFormContainer">
      <h2>Enter Your Information</h2>
      <form onSubmit={handleSubmit} className="userDataForm">
        <div className="formGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submitButton">Submit</button>
      </form>
      {userData && (
        <div className="userDataDisplay">
          <h2>Stored User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Age: {userData.age}</p>
        </div>
      )}
    </div>
  );
}

export default UserDataForm;

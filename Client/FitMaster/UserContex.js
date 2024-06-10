import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: 0,
    weight: 0,
    gender: '',
    height: 0,
    isKg: true,
  });

  const updateUserInfo = (newInfo) => {
    setUserInfo((prevInfo) => ({ ...prevInfo, ...newInfo }));
  };

  const submitUserInfo = async (user) => {
    const data = JSON.stringify({
      collection: "users",
      database: "FitMaster", // Ensure this matches your MongoDB database name
      dataSource: "FitMaster0", // Ensure this matches your MongoDB data source name
      document: user, // Ensure the entire userInfo object is sent
    });

    const config = {
      method: 'post',
      url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-ahccmtz/endpoint/data/v1/action/insertOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'AVDiOuu2gQWJFXtVxQua89Sd9sw3U5BNsw5EWx98c1JXJzrqCElfzeo0bqaP1ZAL', // Replace with your actual API key
      },
      data: data,
    };

    try {
      const response = await axios(config);
      console.log('User information submitted successfully:', response.data);
    } catch (error) {
      throw new Error(`Failed to submit user information: ${error.message}`);
    }
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUserInfo, submitUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

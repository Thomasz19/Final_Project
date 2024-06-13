/**
 * UserContext.js
 *
 * This file defines the UserContext and UserProvider components for managing user state in a React application.
 * It provides a context for storing and updating user information, as well as a function for submitting user data
 * to a MongoDB database.
 *
 * The UserContext is used to share user information across different components of the app, allowing components
 * to access and update the user state without prop drilling.
 *
 * The UserProvider component wraps the application and provides the context values to all child components.
 *
 * Usage:
 * - Import the UserContext and use the useContext hook to access user information and functions in any component.
 * - The UserProvider should wrap the top-level component in the application to ensure all components have access
 *   to the context.
 *
 * Example:
 * import { useContext } from 'react';
 * import { UserContext } from '../UserContext';
 *
 * const MyComponent = () => {
 *   const { userInfo, updateUserInfo, submitUserInfo } = useContext(UserContext);
 *
 *   // Use the context values in your component
 * };
 *
 * Author: [Thomas Zoldowski]
 * Date: [6/9/20224]
 */

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
      database: "FitMaster", 
      dataSource: "FitMaster0", 
      document: {
        name: userInfo.name,
        age: userInfo.age,
        weight: userInfo.weight,
        gender: userInfo.gender,
        height: userInfo.height,
        isKg: userInfo.isKg,
      }, 
    });

    const config = {
      method: 'post',
      url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-ahccmtz/endpoint/data/v1/action/insertOne', //API Endpoint link
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'AVDiOuu2gQWJFXtVxQua89Sd9sw3U5BNsw5EWx98c1JXJzrqCElfzeo0bqaP1ZAL', // API Key
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

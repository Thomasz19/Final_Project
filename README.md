```
Introduction to Software Engineering - CIS 350
```
### Department: Computer Science and Engineering

### FitMaster: A Fitness tracker App

### Made by:
---
#### Thomas Zoldowski <br>
#### Andrew Becker <br>
#### Nicholas Martino<br>
---
## 1 Abstract

In today's health-conscious society, individuals are increasingly seeking effective ways to manage their fitness routines and track their progress. FitMaster is designed to meet this demand by providing a comprehensive fitness tracking and goal-setting application. Users can register securely, manage their profiles, and personalize their workout plans by selecting specific muscle groups. The app enables detailed tracking of exercises, including repetitions, sets, and weights used, ensuring users can monitor their progress accurately. Additionally, FitMaster allows users to set and update fitness goals such as target weight and calories burned, with visual progress tracking through graphs and summaries. The app also includes a robust database of exercises categorized by muscle groups, offering detailed descriptions and workout suggestions. Furthermore, users can log their daily meals, tracking their nutritional intake in terms of calories, proteins, fats, and carbs. FitMaster empowers users to take control of their fitness journey, providing the tools needed to achieve their health and fitness goals efficiently and effectively.

## 2 Introduction

Fitness and health management have become a significant focus for many individuals in today's fast-paced world. With the growing adoption of smartphones, fitness applications have emerged as a convenient and effective tool for tracking workouts and setting personal fitness goals. FitMaster leverages this technological trend to provide users with a comprehensive fitness tracking and goal-setting solution. FitMaster is designed to cater to the needs of fitness enthusiasts by offering personalized workout plans, detailed exercise logging, and progress tracking, all within a user-friendly mobile application. The widespread use of smartphones and advancements in mobile app technology have created an ideal platform for developing a powerful fitness application like FitMaster. This app enables users to select different muscle groups and receive tailored workout suggestions. It also allows them to track the weights used for each exercise, set and monitor fitness goals, and log their daily nutritional intake. With the ability to visually track progress through graphs and summaries, FitMaster provides a holistic approach to fitness management. To get started with FitMaster, users need a smartphone with the app installed. After registering and setting up their profile, users can create and manage workout plans, log exercises, track their weight and other metrics, and set personalized fitness goals. FitMaster aims to simplify the process of achieving fitness objectives by offering an efficient, accessible, and cost-effective solution for health and fitness management. Whether you are a beginner or an experienced fitness enthusiast, FitMaster is designed to help you stay motivated and on track towards your fitness goals.

## 3 Architectural Design

“FitMaster” application is based on the client-server architecture. The client is provided with an interactive React Native-based user interface for managing and tracking workouts, exercises, and personal fitness progress. The server-side processing is enabled using Node.js, Express, and MongoDB. The client requests the server for user-specific workout and exercise data, and the server responds with the relevant information. Additionally, the server allows users to log their exercise data, track their progress over time, and manage their personal profiles. FitMaster aims to provide a comprehensive solution for users to enhance their fitness journey by offering personalized workout plans and progress tracking.

### 3.2 Use Case Diagram
Nick

### 3.2 Class Diagram

This section contains a single MVC pattern class diagram for our design. The diagram shows the following components:

- Boundary class: FitMasterUI
- Control class: FitMasterController
- Entity classes: User, Workout, MuscleGroup, Exercise, LogEntry

This diagram illustrates the interactions between the user interface, control logic, and data models in the FitMaster application. It provides a comprehensive view of how the various components of the application interact with each other to facilitate user management, workout planning, and exercise logging.

<p align="center">
  <img src="Images/UML class.png" width="500" title="class diagram">
  <br>
  <br>
  Figure 2: Class Diagram
</p>

### 3.3 Sequence Diagram
andrew

## 4 User Guide/implementation

### 4.1 Client Side

#### 4.1.1 Starting the Application

The user needs to install the “FitMaster” application on their Android-based device. After installation, the icon of the app will appear on the Home Screen of the user’s device. Upon opening the application, the “FitMaster” Home Screen will be displayed.

#### 4.1.2 User Creation

Initially, the user has to register their details with the application for the first time. This is a one-time registration process. The user must enter details such as name, gender, height, weight, and age. Once done, you will also have to option to create additional users if needed.

<p align="center">
  <img src="Images/CIS350App/UserSelectScreen.png" width="200" title="SelectUser">
  <br>
  Figure 5: Select User or Create a New User
  <br>
  <br>
  <img src="Images/CIS350App/GenderSelectScreen.png" width="100" title="Select Gender">
  <img src="Images/CIS350App/AgeSelectScreen.png" width="200" title="Select Age">
  <img src="Images/CIS350App/WeightSelectScreen.png" width="200" title="Select Age">
  <img src="Images/CIS350App/WeightSelectScreen.png" width="200" title="Select Age">
  <br>
  Figure 6: (a) Create Account (b) Create Account Activity with Details
  <br>
</p>

## 5 Future Scope
stuff

## 6 Conclusion
stuff

## 7 Walkthrough
stuff

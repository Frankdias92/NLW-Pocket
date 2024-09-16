# Next Level Week 17 - Front-End Application

This repository contains the code for the front-end of the application developed during the 17th edition of the Next Level Week, held from September 9 to 11, 2024. This project demonstrates how to build a mobile application using React Native and Expo.

## Project Overview

In this project, we built the front-end of an application that allows users to manage goals. The application interacts with a back-end API to create, update, and retrieve goals, as well as manage their completion status.

## Technologies Used

- **React Native**: Framework for building mobile applications using React.
- **Expo**: A framework and platform for universal React applications.
- **React Navigation**: Routing and navigation for React Native.
- **React Query**: Data fetching and synchronization for React applications.
- **Day.js**: A lightweight date library.
- **NativeWind**: Utility-first CSS for React Native.

## Project Setup

### Prerequisites

Ensure you have the following installed:

- Node.js
- Android Studio (for emulation) or App expo installed in your phone

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/starting-with-rn.git
   cd starting-with-rn
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

### Running the Application

To run the application, use the following commands:

- **Start on Android Device/Emulator**

  First, make sure Android Studio is running an emulator or connect an Android device via USB.

  ```bash
  npx react-native run-android
  ```

- **Start on iOS Simulator**

  Ensure you have a macOS system with Xcode installed, and then use:

  ```bash
  npx react-native run-ios
  ```

- **Start on Web**

  ```bash
  npx expo start --web
  ```

### API Endpoints

The front-end application communicates with the back-end API using the following endpoints:

- **Get Summary**

  ```typescript
  export async function getSummary(): Promise<SummaryProps> {
      const response = await fetch('http://192.168.1.21:3333/summary');
      const data = await response.json();
      return data.summary;
  }
  ```

- **Create Goal Completion**

  ```typescript
  export async function createGoalCompletion(goalId: string) {
      const response = await fetch('http://192.168.1.21:3333/completions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ goalId }),
      });
      if (response.ok) {
          getSummary();
          getPendingGoals();
      }
  }
  ```

- **Create New Goal**

  ```typescript
  export async function createNewGoal(title: string, desiredWeeklyFrequency: number) {
      const response = await fetch('http://192.168.1.21:3333/goals', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, desiredWeeklyFrequency }),
      });
      if (response.ok) {
          getSummary();
          getPendingGoals();
      }
  }
  ```

- **Decrement Goal Completion**

  ```typescript
  export async function decrementGoalCompletion(goalId: string) {
      const response = await fetch('http://192.168.1.21:3333/completions/decrement', {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ goalId }),
      });
      if (response.ok) {
          getSummary();
          getPendingGoals();
      }
  }
  ```

- **Get Pending Goals**

  ```typescript
  export async function getPendingGoals(): Promise<PeendingGoalsResponse> {
      const response = await fetch('http://192.168.1.21:3333/pending-goals');
      if (!response.ok) {
          throw new Error('Failed to fetch pending goals');
      }
      const data = await response.json();
      return data.pendingGoals;
  }
  ```

# MyNavigationApp

MyNavigationApp is a React Native application built using Expo and Expo Router. This app demonstrates different navigation techniques including link creation, dynamic routing, push and replace navigation, and programmatic navigation.

## Table of Contents

- [Overview](#overview)
- [Setup the Project](#setup-the-project)
- [Project Structure](#project-structure)
- [Pages](#pages)
  - [Home Page](#home-page)
  - [About Page](#about-page)
  - [User Profile Page](#user-profile-page)
- [Navigation](#navigation)
- [Running the Project](#running-the-project)

## Overview

This project includes the following features:
- Basic navigation using links
- Dynamic routing for user profiles
- Push and replace navigation methods
- Programmatic navigation using `useNavigation` from Expo Router

## Setup the Project

1. **Initialize a new Expo project:**

   ```bash
   expo init MyNavigationApp
   cd MyNavigationApp

2. **Install Expo Router**
npx expo install expo-router


*Project Structure*
MyNavigationApp/
├── app/
│   ├── index.js       // Home Page
│   ├── about.js       // About Page
│   ├── user/
│   │   └── [id].js    // User Profile Page with dynamic routing
│   ├── _layout.js     // Layout configuration
├── assets/
├── App.js
├── app.json
├── package.json
├── node_modules/
├── ...


Pages


Home Page
File: app/index.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <Link href="/about" style={styles.link}>Go to About Page</Link>
      <Link href="/user/1" style={styles.link}>Go to User Profile Page</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
  },
});

export default HomePage;
About Page
File: app/about.js

jsx
Copy code
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from 'expo-router';

const AboutPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Button title="Go to Home Page (Push)" onPress={() => navigation.push('/')} />
      <Button title="Go to Home Page (Replace)" onPress={() => navigation.replace('/')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AboutPage;



User Profile Page
File: app/user/[id].js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const UserProfilePage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>User Profile Page</Text>
        <Text style={styles.error}>User ID is missing!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile Page</Text>
      <Text style={styles.userId}>User ID: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userId: {
    marginTop: 20,
    fontSize: 18,
  },
  error: {
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
});

export default UserProfilePage;



Navigation
Layout Configuration
File: app/_layout.js
import { Stack } from 'expo-router';
import { Slot } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Slot />
    </Stack>
  );
};

export default Layout;



Running the Project
Start your Expo project:
expo start

This README provides an overview of the project, installation instructions, and a description of the different pages and navigation setup. Feel free to modify this as needed for your specific project requirements
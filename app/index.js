// app/index.js
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

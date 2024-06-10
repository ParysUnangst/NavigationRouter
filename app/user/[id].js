// app/user/[id].js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

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


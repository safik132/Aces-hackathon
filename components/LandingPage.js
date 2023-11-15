import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LandingPage() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>HACK REVOLUTION</Text>
          <Text style={styles.subHeaderText}>Powered by ACES</Text>
          <Text style={styles.detailsText}>Venue: MJCET Hyderabad.</Text>
          <Text style={styles.detailsText}>Date: 17 December 2023.</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Register"
              color="#f0ad4e" // Button color
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </View>
      );
};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#213966', // Background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', // White text for contrast
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 18,
    color: '#ffffff', // White text for contrast
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 16,
    color: '#ffffff', // White text for contrast
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});

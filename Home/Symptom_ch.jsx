import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
export default function Symptom_ch() {
    const [text, setText] = useState('');
    const handlePress = (symptom) => {
        setText((prevText) => (prevText ? `${prevText}, ${symptom}` : symptom));
      };
    
  return (


    <View style={styles.container4}>
        <TouchableOpacity
              style={styles.backButton4}
              onPress={() => router.push('/')} // Navigate to the previous page or home
            >
              <FontAwesome name="arrow-left" size={24} color="#000" />
            </TouchableOpacity>

            <Text style={styles.header4}>Symptom Checker</Text>
            
      <TextInput
        style={styles.input4}
        placeholder="Enter your symptoms "
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity style={styles.loginButton4} onPress={()=>{
              handleSubmit
              router.push('/Home/Symptom_ch')}}>
              <Text style={styles.loginButtonText4}>Check Symptom</Text>
            </TouchableOpacity>
        
        <Text style={styles.label}>Common Symptoms </Text>
        <View style={styles.buttonContainer}>
        {['itching', 'skin_rash', 'headache', 'nausea', 'fatigue', 'restlessness'].map((symptom) => (
          <TouchableOpacity
            key={symptom}
            style={styles.button}
            onPress={() => handlePress(symptom)}
          >
            <Text style={styles.buttonText}>{symptom}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
      );
};

const styles = StyleSheet.create({
    container4:{
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
    backButton4: {
        marginTop:30,
        marginBottom: 40,
    },
    header4: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      input4: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        marginBottom: 15,
        marginTop:5,
      },
      loginButton4: {
        marginLeft:60,
        width:240,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#4285F4',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginTop:20
      },
      loginButtonText4: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      label: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
      },
      button: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        margin: 5,
      },
      buttonText: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
      },
      buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
  });
import { View, Text } from 'react-native'
import React from 'react'
import { TextInput,TouchableOpacity,StyleSheet,Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router'

export default function SignIn() {
    const router = useRouter();
  return (
    <View style={styles.container}>
    {/* Back Arrow */}
    <TouchableOpacity style={styles.backButton} 
    onPress={()=>router.push('/')}>
      <FontAwesome name="arrow-left" size={24} color="#000" />
    </TouchableOpacity>

    {/* Welcome Text */}
    <Text style={styles.header}>Welcome</Text>
    <Text style={styles.header}>
      Lorem 
    </Text>

    {/* Email Input */}
    <TextInput
      style={styles.input}
      placeholder="example@example.com"
      placeholderTextColor="#A0A3BD"
      keyboardType="email-address"
    />

    {/* Password Input */}
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        placeholderTextColor="#A0A3BD"
        secureTextEntry
      />
      <TouchableOpacity>
        <FontAwesome name="eye" size={20} color="#A0A3BD" />
      </TouchableOpacity>
    </View>

    {/* Forget Password */}
    <TouchableOpacity>
      <Text style={styles.forgotPassword}>Forget Password</Text>
    </TouchableOpacity>

    {/* Login Button */}
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginButtonText}>Log In</Text>
    </TouchableOpacity>

    {/* Social Login */}
    <Text style={styles.orText}>or sign up with</Text>
    <View style={styles.socialContainer}>
      <FontAwesome name="google" size={24} color="#4285F4" style={styles.icon} />
      <FontAwesome name="facebook" size={24} color="#3b5998" style={styles.icon} />
      <FontAwesome name="fingerprint" size={24} color="#000" style={styles.icon} />
    </View>

    {/* Sign Up */}
    <TouchableOpacity>
      <Text style={styles.signupText}>
        Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>
    </TouchableOpacity>
  </View>
);
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    backButton: {
      marginBottom: 20,
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#1E1E1E',
    },
    subHeader: {
      fontSize: 14,
      color: '#6A6A6A',
      marginVertical: 10,
    },
    input: {
      height: 50,
      borderRadius: 10,
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 15,
      marginBottom: 15,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      borderRadius: 10,
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 15,
      marginBottom: 5,
    },
    passwordInput: {
      flex: 1,
    },
    forgotPassword: {
      color: '#4285F4',
      alignSelf: 'flex-end',
      marginVertical: 10,
    },
    loginButton: {
      height: 50,
      borderRadius: 10,
      backgroundColor: '#4285F4',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    orText: {
      textAlign: 'center',
      marginVertical: 10,
      color: '#6A6A6A',
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,
    },
    icon: {
      marginHorizontal: 15,
    },
    signupText: {
      textAlign: 'center',
      color: '#6A6A6A',
    },
    signupLink: {
      color: '#4285F4',
      fontWeight: 'bold',
    },
    });
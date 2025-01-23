import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility state

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/')} // Navigate to the previous page or home
      >
        <FontAwesome name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      {/* Welcome Text */}
      <Text style={styles.header}>Let's Sign You In</Text>
      <Text style={styles.subHeader}>Welcome Back</Text>

      {/* Email Input */}
      <Text style={styles.label}>Email or Mobile Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter "
        placeholderTextColor="#A0A3BD"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#A0A3BD"
          secureTextEntry={!passwordVisible} // Toggle visibility
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <FontAwesome
            name={passwordVisible ? 'eye-slash' : 'eye'}
            size={20}
            color="#A0A3BD"
          />
        </TouchableOpacity>
      </View>

      {/* Forget Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
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
      </View>

      {/* Sign Up */}
      <TouchableOpacity  onPress={()=>router.push('login/SignUp')}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    color: '#A0A3BD',
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    marginBottom: 15,
    marginTop:5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    marginBottom: 15,
    marginTop:5,
  },
  passwordInput: {
    flex: 1,
    
  },
  forgotPassword: {
    color: '#4285F4',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginButton: {
    marginLeft:60,
    width:240,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#A0A3BD',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  signupText: {
    textAlign: 'center',
    color: '#A0A3BD',
  },
  signupLink: {
    color: '#4285F4',
    fontWeight: 'bold',
  },
});

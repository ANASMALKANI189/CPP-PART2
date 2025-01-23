import { useState } from 'react';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SignUp() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility state
  const [date, setDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const handleSubmit = () => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email.trim()) {
      Alert.alert('Validation Error', 'Email is required.');
      return;
    } else if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email.');
      return;
    }
  
    Alert.alert('Submitted Successfully', `Email: ${email}\nMobile: ${mobile || 'Not Provided'}`);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios'); // For Android, the picker closes automatically
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={styles.container1}>
      <TouchableOpacity
        style={styles.backButton1}
        onPress={() => router.push('/login/SignIn')} // Navigate to the previous page or home
      >
        <FontAwesome name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.header1}>New Account</Text>

      <Text style={styles.label1}>Full Name</Text>
      <TextInput
        style={styles.input1}
        placeholder="John Doe"
        placeholderTextColor="#A0A3BD"
        keyboardType="text"
      />

<Text style={styles.label1}>Email</Text>
      <TextInput
        style={styles.input1}
        placeholder="example@example.com"
        placeholderTextColor="#A0A3BD"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text style={styles.label1}>Mobile Number (Optional)</Text>
      <TextInput
        style={styles.input1}
        placeholder="1234567890"
        placeholderTextColor="#A0A3BD"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={text => setMobile(text)}
      />


      <Text style={styles.label1}>Password</Text>
      <View style={styles.passwordContainer1}>
        <TextInput
          style={styles.passwordInput1}
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

      <View>
      {/* Date Input */}
      <Text style={styles.label1}>Date of Birth</Text>
      <TouchableOpacity onPress={showDatePicker} style={styles.input1}>
        <Text style={{ color: date ? '#000' : '#A0A3BD', marginTop: 15 }}>
          {date ? date.toLocaleDateString('en-US') : 'DD/MM/YYYY'}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date || new Date()} // Use current date as a fallback if no date is selected
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}
    </View>
      <TouchableOpacity style={styles.loginButton1} onPress={handleSubmit}>
              <Text style={styles.loginButtonText1}>Sign Up</Text>
            </TouchableOpacity>
      <Text style={styles.orText1}>or sign up with</Text>
                  <View style={styles.socialContainer1}>
                    <FontAwesome name="google" size={24} color="#4285F4" style={styles.icon1} />
                    <FontAwesome name="facebook" size={24} color="#3b5998" style={styles.icon1} />
                  </View>
            <TouchableOpacity  onPress={()=>router.push('login/SignIn')}>
                    <Text style={styles.signupText1}>
                      Already have an account? <Text style={styles.signupLink1}>Log in</Text>
                    </Text>
                  </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container1:{
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label1: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  input1: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    marginBottom: 15,
    marginTop:5,
  },
  passwordContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    marginBottom: 15,
    marginTop:5,
  },
  passwordInput1: {
    flex: 1,
  },
  socialContainer1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon1: {
    marginHorizontal: 10,
  },
  loginButton1: {
    marginLeft:60,
    width:240,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText1: {
    textAlign: 'center',
    color: '#A0A3BD',
    marginBottom: 10,
  },
  signupText1: {
    textAlign: 'center',
    color: '#A0A3BD',
  },
  signupLink1: {
    color: '#4285F4',
    fontWeight: 'bold',
  },
  backButton1: {
    marginBottom: 20,
  }
});

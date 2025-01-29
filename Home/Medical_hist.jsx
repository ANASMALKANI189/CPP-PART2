import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Alert,
    ScrollView
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import RadioGroup from 'react-native-radio-buttons-group';

export default function MedicalHist() {
    const [date, setDate] = useState(null);
    const [selectedGender, setSelectedGender] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [email, setEmail] = useState('');
    const [allergies, setAllergies] = useState('');
    const [selectedId, setSelectedId] = useState(null);

    const radioButtons = [
        { id: '1', label: 'Never', value: 'never' },
        { id: '2', label: '1-2 Days', value: '1-2 days' },
        { id: '3', label: '3-4 Days', value: '3-4 days' },
        { id: '4', label: '5+ Days', value: '5+ days' },
    ];

    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            Alert.alert('Validation Error', 'Email is required.');
            return;
        } else if (!emailRegex.test(email)) {
            Alert.alert('Validation Error', 'Please enter a valid email.');
            return;
        }

        Alert.alert('Submitted Successfully', `Email: ${email}`);
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
        <ScrollView>
            <View style={styles.container5}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton5} onPress={() => router.push('/')}>
                        <FontAwesome name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.header6}>Your Medical History</Text>
                </View>

                <Text style={styles.subHeader6}>General Patient Information</Text>
                <Text style={styles.underline}>_____________________________________________________</Text>

                <Text style={styles.label5}>Patient Name:</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputHalf} placeholder="First Name" placeholderTextColor="#A0A3BD" />
                    <TextInput style={styles.inputHalf} placeholder="Last Name" placeholderTextColor="#A0A3BD" />
                </View>

                {/* Date Input */}
                <Text style={styles.label5}>Date of Birth</Text>
                <TouchableOpacity onPress={showDatePicker} style={styles.input1}>
                    <Text style={{ color: date ? '#000' : '#A0A3BD', marginTop: 15 }}>
                        {date ? date.toLocaleDateString('en-US') : 'DD/MM/YYYY'}
                    </Text>
                </TouchableOpacity>

                {showPicker && (
                    <DateTimePicker
                        value={date || new Date()}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={handleDateChange}
                    />
                )}

                {/* Patient Gender */}
                <Text style={styles.label5}>Patient Gender:</Text>
                <View style={styles.pickerContainer}>
                    <Picker selectedValue={selectedGender} onValueChange={(itemValue) => setSelectedGender(itemValue)} style={styles.picker}>
                        <Picker.Item label="Please Select" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
                </View>

                {/* Patient Height */}
                <Text style={styles.label5}>Patient Height (Cm's):</Text>
                <TextInput style={styles.input1} placeholder="Ex: 176" placeholderTextColor="#A0A3BD" keyboardType="numeric" />

                {/* Patient Weight */}
                <Text style={styles.label5}>Patient Weight (Kg's):</Text>
                <TextInput style={styles.input1} placeholder="Ex: 76" placeholderTextColor="#A0A3BD" keyboardType="numeric" />

                <Text style={styles.label5}>Email</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="example@example.com"
                    placeholderTextColor="#A0A3BD"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Text style={styles.subHeader7}>Patient Medical History</Text>
                <Text style={styles.underline}>_____________________________________________________</Text>

                <Text style={styles.label5}>Please list any allergies </Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Enter your allergies here..."
                    placeholderTextColor="#A0A3BD"
                    multiline={true}
                    numberOfLines={4}
                    value={allergies}
                    onChangeText={(text) => setAllergies(text)}
                />

                <Text style={styles.label5}>Please list your medications </Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Enter your medications here..."
                    placeholderTextColor="#A0A3BD"
                    multiline={true}
                    numberOfLines={4}
                    value={allergies}
                    onChangeText={(text) => setAllergies(text)}
                />

<View style={styles.radioMainContainer}>
  <Text style={styles.label5}>Exercise :</Text>
  <View style={styles.radioContainer}>
    {radioButtons.map((button) => (
      <TouchableOpacity 
        key={button.id} 
        style={styles.radioButton} 
        onPress={() => setSelectedId(button.id)}
      >
        <View style={[styles.radioCircle, selectedId === button.id && styles.radioSelected]} />
        <Text style={styles.radioLabel}>{button.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
</View>

              
                <TouchableOpacity style={styles.loginButton5} onPress={()=>{
                        handleSubmit
                        router.push('/Home/Symptom_ch')}}>
                        <Text style={styles.loginButtonText5}>Save & Submit </Text>
                      </TouchableOpacity>
                      
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container5: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    backButton5: {
        marginTop: 30,
        marginBottom: 40,
    },
    header6: {
        marginBottom: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 30,
    },
    subHeader6: {
        fontSize: 22,
        fontWeight:'bold',
        color: 'black',
        marginBottom: 20,
        textAlign: 'left',
    },
    subHeader7: {
      fontSize: 22,
      fontWeight:'bold',
      color: 'black',
      marginBottom: 20,
      textAlign: 'left',
      marginTop:25
  },
    underline: {
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputHalf: {
        flex: 1,
        height: 50,
        borderRadius: 6,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        marginBottom: 15,
        marginTop: 5,
        marginHorizontal: 5,
    },
    label5: {
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
    },
    input1: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        marginBottom: 15,
        marginTop: 5,
    },
    pickerContainer: {
        height: 50,
        borderRadius: 6,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    radioButton: {
      flexDirection: 'row', // Ensures text is next to radio button
      alignItems: 'center', // Aligns everything in one line
      marginBottom: 10, // Adds spacing between options
    },
    radioCircle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'grey',
      marginRight: 10, // Space between button and label
    },
    radioSelected: {
      backgroundColor: 'black', // Fills selected button
    },
    radioLabel: {
      fontSize: 16,
      color: '#333',
    },
    radioMainContainer: {
      flexDirection: 'row', // 🟢 "Exercise:" aur radio buttons ek row mein aayenge
      alignItems: 'flex-start', // 🟢 Top se align rahega
    },
    
    radioContainer: {
      flexDirection: 'column', // 🟢 Radio buttons ek ke niche ek aayenge
      marginLeft: 15, // 🟢 "Exercise:" ke thoda right shift ho jayenge
    },
    
    radioButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10, // 🟢 Space between radio buttons
    },
    
    loginButton5: {
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
    loginButtonText5: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
});

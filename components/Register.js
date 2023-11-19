import React, { useState } from 'react';
import {TouchableOpacity, Platform } from 'react-native';
import {Alert, ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';



export default function Register() {
    // State for each form field
    const [selectedFileName, setSelectedFileName] = useState('');
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;
    const [teamName, setTeamName] = useState('');
    const [teamMembers, setTeamMembers] = useState('2');
    const [teamLeaderName, setTeamLeaderName] = useState('');
    const [college, setCollege] = useState('');
    const [branch, setBranch] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    // State for team member 1
    const [teamMember1Name, setTeamMember1Name] = useState('');
    const [teamMember1RollNo, setTeamMember1RollNo] = useState('');
    const [teamMember1Gender, setTeamMember1Gender] = useState('M');

    // State for team member 2
    const [teamMember2Name, setTeamMember2Name] = useState('');
    const [teamMember2RollNo, setTeamMember2RollNo] = useState('');
    const [teamMember2Gender, setTeamMember2Gender] = useState('M');

    const [teamMember3Name, setTeamMember3Name] = useState('');
    const [teamMember3RollNo, setTeamMember3RollNo] = useState('');
    const [teamMember3Gender, setTeamMember3Gender] = useState('M');

    const [teamMember4Name, setTeamMember4Name] = useState('');
    const [teamMember4RollNo, setTeamMember4RollNo] = useState('');
    const [teamMember4Gender, setTeamMember4Gender] = useState('M');

    const [teamMember5Name, setTeamMember5Name] = useState('');
    const [teamMember5RollNo, setTeamMember5RollNo] = useState('');
    const [teamMember5Gender, setTeamMember5Gender] = useState('M');


    const [track, setTrack] = useState('Generic Software');
    const [selectedFile, setSelectedFile] = useState(null);

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <View>
                        <Text style={styles.label}>Team Name:</Text>
                        <TextInput style={styles.input} value={teamName} onChangeText={setTeamName} />

                        <Text style={styles.label}>Team Leader Name:</Text>
                        <TextInput style={styles.input} value={teamLeaderName} onChangeText={setTeamLeaderName} />

                        <Text style={styles.label}>College:</Text>
                        <TextInput style={styles.input} value={college} onChangeText={setCollege} />

                        <Text style={styles.label}>Branch:</Text>
                        <TextInput style={styles.input} value={branch} onChangeText={setBranch} />

                        <Text style={styles.label}>Roll Number:</Text>
                        <TextInput style={styles.input} value={rollNumber} onChangeText={setRollNumber} />

                        <Text style={styles.label}>Email:</Text>
                        <TextInput style={styles.input} value={email} onChangeText={setEmail} />

                        <Text style={styles.label}>Mobile Number:</Text>
                        <TextInput 
                            style={styles.input} 
                            value={mobileNumber} 
                            onChangeText={setMobileNumber} 
                            keyboardType="numeric" // This ensures only the numeric keyboard is shown
                        />
                    </View>
                );
            case 2:
                return (
                    <View><View>
                        <Text style={styles.label}>Team Member 1 Name:</Text>
                        <TextInput style={styles.input} value={teamMember1Name} onChangeText={setTeamMember1Name} />
                        <Text style={styles.label}>Team Member 1 Roll Number:</Text>
                        <TextInput style={styles.input} value={teamMember1RollNo} onChangeText={setTeamMember1RollNo} />
                        <Text style={styles.label}>Team Member 1 Gender:</Text>
                        <Picker
                            selectedValue={teamMember1Gender}
                            onValueChange={setTeamMember1Gender}
                            style={styles.picker}
                        >
                            <Picker.Item label="Male" value="M" />
                            <Picker.Item label="Female" value="F" />
                        </Picker>
                        </View>
                        <View>
                            <Text style={styles.label}>Team Member 2 Name:</Text>
                            <TextInput style={styles.input} value={teamMember2Name} onChangeText={setTeamMember2Name} />
                            <Text style={styles.label}>Team Member 2 Roll Number:</Text>
                            <TextInput style={styles.input} value={teamMember2RollNo} onChangeText={setTeamMember2RollNo} />
                            <Text style={styles.label}>Team Member 2 Gender:</Text>
                            <Picker
                                selectedValue={teamMember2Gender}
                                onValueChange={setTeamMember2Gender}
                                style={styles.picker}
                            >
                                <Picker.Item label="Male" value="M" />
                                <Picker.Item label="Female" value="F" />
                            </Picker>
                        </View>
                        <View>
                            <Text style={styles.label}>Team Member 3 Name:</Text>
                            <TextInput style={styles.input} value={teamMember3Name} onChangeText={setTeamMember3Name} />
                            <Text style={styles.label}>Team Member 3 Roll Number:</Text>
                            <TextInput style={styles.input} value={teamMember3RollNo} onChangeText={setTeamMember3RollNo} />
                            <Text style={styles.label}>Team Member 3 Gender:</Text>
                            <Picker
                                selectedValue={teamMember3Gender}
                                onValueChange={setTeamMember3Gender}
                                style={styles.picker}
                            >
                                <Picker.Item label="Male" value="M" />
                                <Picker.Item label="Female" value="F" />
                            </Picker>
                        </View><View>
                            <Text style={styles.label}>Team Member 4 Name:</Text>
                            <TextInput style={styles.input} value={teamMember4Name} onChangeText={setTeamMember4Name} />
                            <Text style={styles.label}>Team Member 4 Roll Number:</Text>
                            <TextInput style={styles.input} value={teamMember4RollNo} onChangeText={setTeamMember4RollNo} />
                            <Text style={styles.label}>Team Member 4 Gender:</Text>
                            <Picker
                                selectedValue={teamMember4Gender}
                                onValueChange={setTeamMember4Gender}
                                style={styles.picker}
                            >
                                <Picker.Item label="Male" value="M" />
                                <Picker.Item label="Female" value="F" />
                            </Picker>
                        </View><View>
                            <Text style={styles.label}>Team Member 5 Name:</Text>
                            <TextInput style={styles.input} value={teamMember5Name} onChangeText={setTeamMember5Name} />
                            <Text style={styles.label}>Team Member 5 Roll Number:</Text>
                            <TextInput style={styles.input} value={teamMember5RollNo} onChangeText={setTeamMember5RollNo} />
                            <Text style={styles.label}>Team Member 5 Gender:</Text>
                            <Picker
                                selectedValue={teamMember5Gender}
                                onValueChange={setTeamMember5Gender}
                                style={styles.picker}
                            >   
                                <Picker.Item label="Male" value="M" />
                                <Picker.Item label="Female" value="F" />
                            </Picker>
                        </View>
                        </View>
                );
            case 3:
                return (
                    <View>
                    <Text style={styles.label}>Tracks:</Text>
                    <Picker
                        selectedValue={track}
                        onValueChange={setTrack}
                        style={styles.picker}
                    >
                        <Picker.Item label="Generic Software" value="Generic Software" />
                        <Picker.Item label="Generic Hardware" value="Generic Hardware" />
                        <Picker.Item label="Health Care" value="Health Care" />
                        <Picker.Item label="Fin-tech" value="Fin-tech" />
                    </Picker>
                    <Text style={styles.label}>File:</Text>
                    <View style={styles.uploadButtonContainer}>
                    <Button title="Upload File" onPress={handleSelectFile} />
                    {selectedFileName && <Text style={styles.fileName}>{selectedFileName}</Text>}
                </View>
                </View>
                );
            default:
                return null;
        }
    };
    const handleSelectFile = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: '*/*',
                copyToCacheDirectory: true,
            });
    
            if (result.type === 'success') {
                setSelectedFile(result);
                setSelectedFileName(result.name); // Set the file name
                console.log("File selected:", result.name); // Log file upload confirmation
            }
        } catch (error) {
            console.error('Error picking a document:', error);
        }
    };
    
    

    const handleSelectFileWeb = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
            setSelectedFileName(event.target.files[0].name); // Set the file name
        }
    };

    const handleSubmit = async () => {
      
            // Check for empty fields
            if (!teamName || !teamLeaderName || !college || !branch || !rollNumber || !email || !mobileNumber || !track || !selectedFile) {
                Alert.alert('Please fill in all fields');
                return;
            }

            // Check if mobile number contains only numbers
            if (!/^\d+$/.test(mobileNumber)) {
                Alert.alert('Mobile number must contain only numbers');
                return;
            }
        const formData = new FormData();

        // Appending text-based form data
        formData.append('teamName', teamName);
        formData.append('teamMembers', teamMembers);
        formData.append('teamLeaderName', teamLeaderName);
        formData.append('college', college);
        formData.append('branch', branch);
        formData.append('rollNumber', rollNumber);
        formData.append('email', email);
        formData.append('mobileNumber', mobileNumber);
        formData.append('track', track);
        formData.append('team_member_1', teamMember1Name);
        formData.append('team_member_1_roll_no', teamMember1RollNo);
        formData.append('team_member_1_gender', teamMember1Gender);
        formData.append('team_member_2', teamMember2Name);
        formData.append('team_member_2_roll_no', teamMember2RollNo);
        formData.append('team_member_2_gender', teamMember2Gender);
        formData.append('team_member_3', teamMember3Name);
        formData.append('team_member_3_roll_no', teamMember3RollNo);
        formData.append('team_member_3_gender', teamMember3Gender);
        formData.append('team_member_4', teamMember4Name);
        formData.append('team_member_4_roll_no', teamMember4RollNo);
        formData.append('team_member_4_gender', teamMember4Gender);
        formData.append('team_member_5', teamMember5Name);
        formData.append('team_member_5_roll_no', teamMember5RollNo);
        formData.append('team_member_5_gender', teamMember5Gender);
        if (selectedFile) {
            // For web, the file is already a Blob or File object
            // For native, you need to fetch the file first
            if (Platform.OS === 'web') {
                formData.append('file', selectedFile);
            } else {
                formData.append('file', {
                    uri: selectedFile.uri,
                    name: selectedFile.name,
                    type: selectedFile.type 
                  });
            }
        }

        try {
            const response = await axios.post("https://aces-hackathon.onrender.com/api/register", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("Form submitted successfully:", response.data);
            console.log(response.data); // Handle the response as needed
    
            // Display success alert
            Alert.alert(
                "Registration Successful",
                "Thank you for registering for Aces Hackathon. Happy Coding!"
            );
    
        } catch (error) {
            console.error('Error submitting form:', error);
            Alert.alert("Registration Failed", "An error occurred during registration.");
        }
    };

    return (
        <ScrollView style={styles.container}>
        <Text style={styles.title}>Hack Revolution Registration</Text>
        <Text style={styles.infoText}>[Hackathon Info Here]</Text>

        {renderStep()}

        <View style={styles.navigationButtons}>
            {currentStep > 1 && <TouchableOpacity style={[styles.button, styles.backButton]} onPress={prevStep}>
                                    <Text style={styles.buttonText}>Back</Text>
                                </TouchableOpacity>}
            {currentStep < totalSteps &&  <TouchableOpacity style={styles.button} onPress={nextStep}>
                                                <Text style={styles.buttonText}>Next</Text>
                                            </TouchableOpacity>}
            {currentStep === totalSteps && <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                                <Text style={styles.buttonText}>Submit</Text>
                                            </TouchableOpacity>}
        </View>
    </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f8', // Lighter background
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#213966',
        marginBottom: 15,
        textAlign: 'center',
    },
    infoText: {
        color: '#213966',
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        color: '#213966',
        marginBottom: 5,
        fontSize: 16,
    },
    input: {
        backgroundColor: '#ffffff',
        marginBottom: 15,
        padding: 15,
        borderRadius: 10, // Rounded corners
        borderWidth: 1,
        borderColor: '#c4c4c4', // Subtle border
        fontSize: 16,
    },
    picker: {
        backgroundColor: '#ffffff',
        marginBottom: 15,
        borderRadius: 10, // Rounded corners
        borderWidth: 1,
        borderColor: '#c4c4c4', // Subtle border
    },
    uploadButtonContainer: {
        marginBottom: 15,
        alignItems: 'center',
    },
    fileName: {
        marginTop: 5,
        fontSize: 16,
        color: 'Black',
    },
    button: {
        backgroundColor: '#213966',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    backButton: {
        backgroundColor: '#213966', // Or any other color for the back button
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: '100%',
        backgroundColor: '#f8f8f8',  // Background color of the picker
        borderColor: '#e0e0e0',      // Border color
        borderWidth: 1,              // Border width
        borderRadius: 10,            // Border radius for rounded corners
        marginBottom: 20,            // Margin bottom for spacing
        color: '#333333',            // Text color inside the picker
        paddingHorizontal: 10,       // Horizontal padding for internal spacing
      },
});

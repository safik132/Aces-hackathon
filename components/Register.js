import React, { useState } from 'react';
import { Platform } from 'react-native';
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

let DocumentPicker;
if (Platform.OS !== 'web') {
  DocumentPicker = require('react-native-document-picker').default;
} 

export default function Register() {
     // State for each form field
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

  
  const handleSelectFile = async () => {
    if (Platform.OS !== 'web') {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf, DocumentPicker.types.plainText],
        });
        setSelectedFile(res);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          console.log('User cancelled the picker');
        } else {
          throw err;
        }
      }
    }
  };
  const handleSelectFileWeb = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleSubmit = async () => {
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
            type: selectedFile.type,
            name: selectedFile.name,
          });
        }
      }
  
      try {
        const response = await axios.post("http://localhost:5000/api/register", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data); // Handle the response as needed
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    
  };
  
    return (
        <ScrollView style={styles.container}>
        {/* Form Title and Info */}
        <Text style={styles.title}>Hack Revolution Registration</Text>
        <Text style={styles.infoText}>[Hackathon Info Here]</Text>
  
        {/* Team Name */}
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
        <TextInput style={styles.input} value={mobileNumber} onChangeText={setMobileNumber} />
        {/* Team Members */}
        <Text style={styles.label}>Team Members:</Text>
        <Picker
          selectedValue={teamMembers}
          onValueChange={setTeamMembers}
          style={styles.picker}
        >
          <Picker.Item label="2 Members" value="2" />
          <Picker.Item label="4 Members" value="4" />
          <Picker.Item label="6 Members" value="6" />
        </Picker>
        {/* Team Member Details */}
        <View>
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
        </View>

        <View>
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
        </View>
        <View>
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
  
        {/* Track Selection */}
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
      {Platform.OS === 'web' ? (
        <input type="file" onChange={handleSelectFileWeb} />
      ) : (
        <Button title="Upload File" onPress={handleSelectFile} />
      )}
        {/* Submit Button */}
        <Button title="Submit" onPress={handleSubmit} />
      </ScrollView>
    );
  }
    
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#213966',
      padding: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: 10,
    },
    infoText: {
      color: '#ffffff',
      marginBottom: 20,
    },
    label: {
      color: '#ffffff',
      marginBottom: 5,
    },
    input: {
      backgroundColor: '#ffffff',
      marginBottom: 10,
      padding: 10,
    },
    picker: {
      backgroundColor: '#ffffff',
      marginBottom: 10,
    },
  });
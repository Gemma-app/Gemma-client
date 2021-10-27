import React, { useState, useRef, createRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';

// Sign up input ideas from https://aboutreact.com/react-native-login-and-signup/
// Info on useRef use from https://stackoverflow.com/questions/32748718/react-native-how-to-select-the-next-textinput-after-pressing-the-next-keyboar

const UserSignupScreen = (props) => {
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userCheckPassword, setUserCheckPassword] = useState('');
  const [userPhoto, setUserPhoto] = useState('../assets/defaultAvatar.png');

  const emailInputRef = createRef();
  const passwordInputRef = createRef();
  const passwordCheckInputRef = createRef();

  const handleSignupDone = () => {
    if (!username) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    if (!userCheckPassword) {
      alert('Please fill Password');
      return;
    }
    if (userPassword !== userCheckPassword) {
      alert('Passwords are not the same');
      return;
    }
    props.navigator.navigate('Map', userPhoto);
  }

  return (
    <View style={styles.userSignupView}>
      <Text style={styles.userSignupTitle}>Sign Up</Text>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput
          style={styles.nameInputText}
          onChangeText={(name) => setUsername(name)}
          placeholder={'First Name'}
          returnKeyType="next"
          onSubmitEditing={() =>
            emailInputRef.current &&
            emailInputRef.current.focus()
          }
          blurOnSubmit={false} />
        <TextInput
          style={styles.emailInputText}
          onChangeText={(email) => setUserEmail(email)}
          keyboardType="email-address"
          placeholder={'User email'}
          ref={emailInputRef}
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current &&
            passwordInputRef.current.focus()
          }
          blurOnSubmit={false}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.passwordInputText}
          onChangeText={(password) => setUserPassword(password)}
          placeholder={'Password'}
          ref={passwordInputRef}
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordCheckInputRef.current &&
            passwordCheckInputRef.current.focus()
          }
          blurOnSubmit={false} />
        <TextInput
          secureTextEntry={true}
          style={styles.passwordInputText}
          onChangeText={(checkPassword) => setUserCheckPassword(checkPassword)}
          placeholder={'Confirm password'}
          ref={passwordCheckInputRef}
          returnKeyType="next"
          blurOnSubmit={false} />
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={handleSignupDone} style={styles.doneButton}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  userSignupView: {
    flexDirection: 'column',
    padding: 10,
  },
  userSignupTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 50,
    color: '#201E3C',
    backgroundColor: '#97CCEE',
    paddingLeft: 10,
  },
  nameInputText: {
    paddingTop: 50,
    fontSize: 30,
  },
  emailInputText: {
    paddingTop: 30,
    fontSize: 30,
  },
  passwordInputText: {
    paddingTop: 30,
    fontSize: 30,
  },
  doneButton: {
    alignItems: "center",
    backgroundColor: "#97CCEE",
    width: 120,
    marginTop: 50,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
  },
});

export default UserSignupScreen;
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState, createRef } from 'react';
import Modal from 'react-native-modal';

{/* The pinNote modal displays a pin's title, tags, and notes when clicked.
    
    Tutorial used:
    https://blog.logrocket.com/creating-a-pop-up-modal-in-react-native/ */}

const PinNote = (props) => {
    const [title, setTitle] = useState(null);
    const [tags, setTags] = useState('');
    const [notes, setNotes] = useState('');

    const tagsRef = createRef();
    const notesRef = createRef();

    const handleClick = (type) => {
        if (type === 'cancel') {
            props.onClick('cancel');
            setTitle(null);
            setTags('');
            setNotes('');
        } else {
            if (title === null) {
                alert('Please fill title');
                return;
            }
            props.onClick('create', title, tags, notes);
            setTitle(null);
            setTags('');
            setNotes('');
        }
    }

    return (
        <Modal isVisible={props.state}>
            <ScrollView contentContainerStyle={styles.Modal} keyboardShouldPersistTaps='handled'>
                <Text style={styles.Header}> Create a new pin </Text>
                <View style={styles.InputView}>
                    <TextInput
                        placeholder={'Title'}
                        style={styles.Title}
                        onChangeText={(text) => setTitle(text)} />
                    <TextInput
                        placeholder={'Tags'}
                        style={styles.Tags}
                        onChangeText={(text) => setTags(text)} />
                    <TextInput
                        placeholder={'Notes'}
                        style={styles.Notes}
                        onChangeText={(text) => setNotes(text)}
                        multiline={true}
                        blurOnSubmit={true} />
                </View>
                <View style={styles.modalButtons}>
                    <TouchableOpacity onPress={() => handleClick('cancel')} style={styles.modalButton}>
                        <Text style={styles.modalText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClick('create')} style={[styles.modalButton, styles.modalCreateButton]}>
                        <Text style={styles.modalText}>Create</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Modal>
    )
};

const styles = StyleSheet.create({
    Header: {
        fontSize: 20,
        paddingTop: 5,
        paddingLeft: 5,
        backgroundColor: '#6CC071',
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: 'bold',
    },
    InputView: {
        justifyContent: 'flex-start',
        marginBottom: 30,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    Modal: {
        backgroundColor: '#E5E5E5',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    modalButton: {
        height: 40,
        width: 100,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalCreateButton: {
        backgroundColor: '#6CC071',
    },
    modalText: {
        fontSize: 20,
    },
    Notes: {
        marginTop: 5,
        fontSize: 15,
        height: 70,
        backgroundColor: '#FFFFFF',
        padding: 5,
        textAlignVertical: 'top',
    },
    Tags: {
        alignItems: 'center',
        marginTop: 5,
        fontSize: 15,
        height: 30,
        backgroundColor: '#FFFFFF',
        padding: 5,
        marginBottom: 5,
    },
    Title: {
        alignItems: 'center',
        marginTop: 5,
        fontSize: 15,
        height: 30,
        backgroundColor: '#FFFFFF',
        padding: 5,
        marginBottom: 5,
    },
});

export default PinNote;
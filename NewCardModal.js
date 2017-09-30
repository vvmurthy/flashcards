import React from 'react';
import { 
  StyleSheet, 
  Text,
  Modal, 
  View, 
  TextInput, 
  TouchableHighlight 
} from 'react-native';

export default class NewCardModal extends React.Component {
  state = {
    newTermInput: '',
    newDefinitionInput: '',
    newCategoryInput: ''
  }

  render() {
    return (
      <Modal 
        animationType={'fade'} 
        transparent={false}
        visible={this.props.modalVisible}
      >
        <View style={styles.newCardModal}>
          <TouchableHighlight 
            onPress={this.props.toggleModal} 
            underlayColor='transparent'
            style={styles.closeButton}
          >
             <Text style={styles.closeButtonText}>✕</Text>
          </TouchableHighlight>

          <TextInput 
            placeholder='New Term'
            style={styles.newTermInput} 
            value={this.state.newTermInput} 
            onChangeText={(text) => {
              this.setState({
                newTermInput: text
              });
            }}
          />

          <TextInput
          placeholder='New Category'
          style={styles.newCategoryInput}
          value={this.state.newCategoryInput}
          onChangeText={(text) => {
            this.setState({
              newCategoryInput: text
            });
          }}
        />

          <TextInput 
            placeholder='New Definition'
            style={styles.newDefinitionInput} 
            value={this.state.newDefinitionInput}
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                newDefinitionInput: text
              });
            }}
          />
          
          <TouchableHighlight 
            style={styles.addCardButton}
            underlayColor='#0A5E2D'
            onPress={() => {
              const {newTermInput, newDefinitionInput, newCategoryInput} = this.state;
              this.props.addCard(newTermInput, newDefinitionInput, newCategoryInput);

              // Reset inputs
              this.setState({
                newTermInput: '',
                newDefinitionInput: '',
                newCategoryInput: ''
              })
            }}
          > 
             <Text style={styles.addCardButtonText}>Add Card</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  } 
}

const styles = StyleSheet.create({
  newCardModal: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    justifyContent: 'center',
    alignContent: 'center'
  },
  newTermInput: {
    backgroundColor: '#ffffff',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    padding: 15,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18
  },
  newTermInput: {
      backgroundColor: '#ffffff',
      borderColor: '#F2F2F2',
      borderWidth: 1,
      padding: 15,
      margin: 10,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 18
    },
  newCategoryInput: {
        backgroundColor: '#ffffff',
        borderColor: '#F2F2F2',
        borderWidth: 1,
        padding: 15,
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 18
      },
  newDefinitionInput: {
    backgroundColor: '#ffffff',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    padding: 15,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    height: 120
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 15,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  closeButtonText: {
    textAlign: 'center',
    fontSize: 40,
    color: '#FFFFFF'
  },
  addCardButton: {
    backgroundColor: '#8A2BE2',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 20
  },
  addCardButtonText: {
    color: '#FFFFFF',
    fontSize: 18
  }
}); 
import React from 'react';
import { 
  StyleSheet, 
  Button, 
  Text, 
  View, 
  TouchableWithoutFeedback 
} from 'react-native';

export default class Card extends React.Component {
  state = {
    showTerm: true,
    showCategory: false
  }

  /*
    Flips the showTerm and showCategory flag in our state
  */
  flipCard = () => {
    this.setState({
      showTerm: !this.state.showTerm,
      showCategory: !this.state.showCategory
    });
  }

  render(){
      const textStyle = (this.state.showTerm) ? (styles.termText) : (styles.definitionText);

      return (
        <TouchableWithoutFeedback onPress={this.flipCard}>
          <View style={[styles.container]}>
            <Text style={styles.cardTitle}>{(this.state.showTerm) ? ("Term + Category") : ("Definition")}</Text>
            <Text style={textStyle}>{(this.state.showTerm) ? (this.props.cardData.term) : (this.props.cardData.definition)}</Text>
            <Text style={styles.categoryText}>{(this.state.showCategory) ? ("") : (this.props.cardData.category)}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 20,
    height: 300
  }, 
  cardTitle: {
    color: '#7f8c8d',
    fontSize: 18,
    //fontFamily: 'Georgia',
    position: 'absolute',
    left: 20,
    top: 20
  },
  termText: {
    fontSize: 50,
    //fontFamily: 'Georgia-Bold'
  },
  definitionText: {
    fontSize: 30,
    //fontFamily: 'Georgia'
  },
  categoryText: {
      fontSize: 20,
      //fontFamily: 'Georgia'
    }
}); 
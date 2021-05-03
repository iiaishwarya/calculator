import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Helper = require('./helpers/helper')('', '');

const App = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  function handleStateChange() {
    let {expression, result} = Helper.getExpressionAndResult();
    setExpression(expression);
    setResult(result);
  }

  return (
    <View style={styles.sectionContainer}>
      <View>
        <Text style={styles.expressionInput}>{expression}</Text>
        <Text style={styles.resultInput}>{result}</Text>
      </View>
      <View style={styles.calcContainer}>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handleAllClear();
              handleStateChange();
            }}>
            <Text style={styles.text}>AC</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handleBack();
              handleStateChange();
            }}>
            <Icon name="backspace" color="grey" size={30} />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handlePercent();
              handleStateChange();
            }}>
            <Text style={styles.text}>%</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button2}
            onPress={() => {
              Helper.handleOperation('/');
              handleStateChange();
            }}>
            <Icon name="divide" color="grey" size={25} />
          </TouchableHighlight>
        </View>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handleNumberTap('7');
              handleStateChange();
            }}>
            <Text style={styles.text}>7</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handleNumberTap('8');
              handleStateChange();
            }}>
            <Text style={styles.text}>8</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handleNumberTap('9');
              handleStateChange();
            }}>
            <Text style={styles.text}>9</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button2}
            onPress={() => {
              Helper.handleOperation('*');
              handleStateChange();
            }}>
            <Icon name="times" color="grey" size={25} />
          </TouchableHighlight>
        </View>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handleNumberTap('4');
              handleStateChange();
            }}>
            <Text style={styles.text}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handleNumberTap('5');
              handleStateChange();
            }}>
            <Text style={styles.text}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handleNumberTap('6');
              handleStateChange();
            }}>
            <Text style={styles.text}>6</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button2}
            onPress={() => {
              Helper.handleOperation('-');
              handleStateChange();
            }}>
            <Text style={styles.text}>
              <Icon name="minus" color="grey" size={25} />
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handleNumberTap('3');
              handleStateChange();
            }}>
            <Text style={styles.text}>3</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handleNumberTap('2');
              handleStateChange();
            }}>
            <Text style={styles.text}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => {
              Helper.handleNumberTap('1');
              handleStateChange();
            }}>
            <Text style={styles.text}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            style={styles.button2}
            onPress={() => {
              Helper.handleOperation('+');
              handleStateChange();
            }}>
            <Text style={styles.text}>
              <Icon name="plus" color="grey" size={25} />
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.rowContainer}>
          <View style={{...styles.rowContainer, width: '50%'}}>
            <TouchableHighlight
              underlayColor="#DDDDDD"
              style={styles.button}
              onPress={() => {
                Helper.handleDecimalTap();
                handleStateChange();
              }}>
              <Text style={styles.text}>.</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#DDDDDD"
              style={styles.button}
              onPress={() => {
                Helper.handleNumberTap('0');
                handleStateChange();
              }}>
              <Text style={styles.text}>0</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              width: '50%',
              alignItems: 'center',
              backgroundColor: '#B76416',
            }}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                Helper.handleEqual();
                handleStateChange();
              }}>
              <Text style={[styles.text, styles.button3]}>=</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  calcContainer: {
    backgroundColor: '#F3F2EF',
    height: '70%',
    justifyContent: 'space-around',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  flexBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
  button2: {
    backgroundColor: '#e2e2e2',
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button3: {
    textAlign: 'center',
    width: '100%',
    color: 'white',
  },
  expressionInput: {
    textAlign: 'right',
    marginRight: 10,
    fontSize: 50,
    marginTop: 60,
    fontWeight: '500',
  },
  resultInput: {
    textAlign: 'right',
    fontSize: 30,
    marginRight: 10,
    marginTop: 10,
  },
});

export default App;

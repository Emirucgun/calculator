import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Image, Linking } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'c') {
      setInput('');
    } else {
      setInput((prevInput) => prevInput + value.toString());
    }
  };



  return (
    <SafeAreaView style={styles.main}>
      <View>
        <TextInput style={styles.screen} showSoftInputOnFocus={false} value={input}></TextInput>
      </View>

      <View style={styles.buttons_row}>
        <TouchableOpacity onPress={()=>
                Linking.openURL("https://youtu.be/L2wbDZ5iO7c?si=wKgnxW_Hk6VbbmQ8") }>
          <Image style={styles.bigbutton} source={require("./assets/playasong.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("/")}>
          <Image style={styles.buttons} source={require("./assets/÷.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttons_row}>
        <TouchableOpacity onPress={() => handleButtonPress("7")}>
          <Image style={styles.buttons} source={require("./assets/7.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("8")}>
          <Image style={styles.buttons} source={require("./assets/8.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("9")}>
          <Image style={styles.buttons} source={require("./assets/9.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("*")}>
          <Image style={styles.buttons} source={require("./assets/×.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttons_row}>
        <TouchableOpacity onPress={() => handleButtonPress("4")}>
          <Image style={styles.buttons} source={require("./assets/4.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("5")}>
          <Image style={styles.buttons} source={require("./assets/5.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("6")}>
          <Image style={styles.buttons} source={require("./assets/6.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("-")}>
          <Image style={styles.buttons} source={require("./assets/-.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttons_row}>
        <TouchableOpacity onPress={() => handleButtonPress("1")}>
          <Image style={styles.buttons} source={require("./assets/1.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("2")}>
          <Image style={styles.buttons} source={require("./assets/2.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("3")}>
          <Image style={styles.buttons} source={require("./assets/3.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("+")}>
          <Image style={styles.buttons} source={require("./assets/plus.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttons_row}>
        <TouchableOpacity onPress={() => handleButtonPress("c")}>
          <Image style={styles.buttons} source={require("./assets/c.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("0")}>
          <Image style={styles.buttons} source={require("./assets/0.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress(".")}>
          <Image style={styles.buttons} source={require("./assets/comma.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("=")}>
          <Image style={styles.buttons} source={require("./assets/equal.png")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F0EDD4",
  },
  buttons: {
    width: 85,
    height: 85,
    borderRadius: 10,
    margin: 5
  },
  screen: {
    width: "100%",
    height: 300,
    color: "#7E1717",
    textAlign: "right",
    fontSize: 50,
    fontWeight: "bold",
    paddingRight:5
  },
  buttons_row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  bigbutton: {
    margin: 5,
    width: 275,
    height: 85,
    borderRadius: 10
  },
});
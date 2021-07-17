import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "./components/Button";
import Display from "./components/Display";

import CalculatorScreen from "./screens/CalculatorScreen";

const App = () => {
  const [displayValue, setdisplayValue] = useState("0");
  const [clearDisplay, setclearDisplay] = useState(false);
  const [operation, setoperation] = useState(null);
  const [values, setValue] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  const addDigit = (n) => {
    const clearDisplaywithzero = displayValue === "0" || clearDisplay;
    if (n === "." && !clearDisplaywithzero && displayValue.includes(".")) {
      return;
    }
    const curretvalue = clearDisplaywithzero ? "" : displayValue;
    const Displayvalue = curretvalue + n;
    setdisplayValue(Displayvalue);
    setclearDisplay(false);
    if (n != ".") {
      const newValue = parseFloat(Displayvalue);
      const value = [...values];
      value[current] = newValue;
      setValue(value);
    }
  };
  const ClearMemory = () => {
    setdisplayValue("0");
    setclearDisplay(false);
    setoperation([0, 0]);
    setCurrent(0);
  };
  const setOperation = (operations) => {
    if (current === 0) {
      setoperation(operations);
      setCurrent(1);
      setclearDisplay(true);
    } else {
      const equals = operation === "=";
      const value = [...values];
      try {
        value[0] = eval(`${value[0]} ${operation} ${value[1]}`);
      } catch (e) {
        value[0] = values[0];
      }
      value[1] = 0;
      setdisplayValue(`${value[0]}`);
      setoperation(equals ? null : operation);
      setCurrent(equals ? 0 : 1);
      setclearDisplay(!equals);
      setValue(value);
    }
  };
  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple listenner={ClearMemory} />
        <Button label="/" operation listenner={setOperation} />
        <Button label="7" listenner={addDigit} />
        <Button label="8" listenner={addDigit} />
        <Button label="9" listenner={addDigit} />
        <Button label="*" operation listenner={setOperation} />
        <Button label="4" listenner={addDigit} />
        <Button label="5" listenner={addDigit} />
        <Button label="6" listenner={addDigit} />
        <Button label="-" operation listenner={setOperation} />
        <Button label="1" listenner={addDigit} />
        <Button label="2" listenner={addDigit} />
        <Button label="3" listenner={addDigit} />
        <Button label="+" operation listenner={setOperation} />
        <Button label="0" double listenner={addDigit} />
        <Button label="." listenner={addDigit} />
        <Button label="=" operation listenner={setOperation} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

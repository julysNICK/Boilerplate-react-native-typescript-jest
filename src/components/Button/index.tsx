import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

export type ButtonProps = {
  listenner?: (a) => any;
  label?: string;
  double?: any;
  triple?: any;
  operation?: any;
};

const Button = ({
  listenner,
  label,
  double,
  triple,
  operation,
}: ButtonProps) => {
  const stylesButton = [styles.button] as any;
  if (double) stylesButton.push(styles.buttonDouble);
  if (triple) stylesButton.push(styles.buttonTriple);
  if (operation) stylesButton.push(styles.operationButton);
  return (
    <TouchableHighlight testID="buttonOnly" onPress={() => listenner(label)}>
      <Text style={stylesButton}> {label}</Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  operationButton: {
    color: "#fff",
    backgroundColor: "#fa8231",
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3,
  },
});

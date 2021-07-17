import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  View,
} from "react-native";

export type DisplayProps = {
  listenner?: () => any;
  value?: string;
};

const Display = ({ value }: DisplayProps) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "flex-end",
  },
  displayValue: {
    fontSize: 60,
    color: "#fff",
  },
});

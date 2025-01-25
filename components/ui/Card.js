import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function Card({children}) {
  return <View style={styles.card}> {children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Card;

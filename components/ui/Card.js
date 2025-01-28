import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

function Card({children}) {
  return <View style={styles.card}>   {children} </View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginTop: deviceWidth < 380 ? 18 : 36,
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




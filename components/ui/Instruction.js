import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';

function Instruction( {children, style}) {
  return (
    <View style={styles.instructionText}>
      <Text style={[styles.instructionText, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default Instruction;
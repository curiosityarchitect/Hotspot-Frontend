import { View, Text, TouchableOpacity,  StyleSheet } from 'react-native'



const UnRsvp= () => {
    return (
      <View style={styles.buttonStyle}>
        <Text style={styles.buttonText}>unattend</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '30%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.333,
  },

  buttonText: {
    color: '#000000',
  },
});

export default UnRsvp;
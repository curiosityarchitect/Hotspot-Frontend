import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CreateEventButton = ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <TouchableOpacity onPress={()=>navigation.navigate("CreateEvent")} style={styles.createBtn}>
        <Text style={styles.createText}>Create Event</Text>
      </TouchableOpacity>

      </View>
    );
}

const styles = StyleSheet.create({
  createBtn: {
    width: '44%',
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

  createText: {
    color: 'black',
  },
});

export default CreateEventButton;
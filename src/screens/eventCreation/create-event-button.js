import { View, Text, TouchableOpacity,  StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements';


const CreateEventButton = () => {
  return (
      <View style={styles.buttonStyle}>
          <Icon name={"add"}  size={30} color="#D2B48C" />
      </View>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:'#fff',
    borderRadius:50,
  },

  createText: {
    color: 'black',
  },
});


export default CreateEventButton;
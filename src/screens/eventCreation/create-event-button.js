import { View, TouchableOpacity,  StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements';

const CreateEventButton = ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={()=>navigation.navigate("CreateEvent")} style={styles.createBtn}>
            <Icon name={"add"}  size={30} color="#D2B48C" />
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
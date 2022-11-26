import { View,  StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements';


const FriendReqButton = () => {
  return (
      <View style={styles.buttonStyle}>
          <Icon name={"person-add"}  size={15} color="#D2B48C" />
      </View>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth:0.1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:33,
    height:33,
    backgroundColor:'#fff',
    borderRadius:50,
  },
  altButtonStyle: {
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.333,
  }
}
);



export default FriendReqButton;
import { View,  StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements';


const ShareButton = () => {
  return (
      <View style={styles.buttonStyle}>
          <Icon name={"share"}  size={15} color="#D2B48C" />
      </View>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth:0.1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 6,
    width:33,
    height:33,
    backgroundColor:'#fff',
    borderRadius:50,
  },
}
);



export default ShareButton;
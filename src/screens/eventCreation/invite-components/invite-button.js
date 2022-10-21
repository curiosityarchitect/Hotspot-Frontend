import { View, Text, TouchableOpacity,  StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements';

const invitebutton= () => {
    <TouchableOpacity onPress={()=>navigation.navigate("CreateEvent")}
        style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:100,
            height:100,
            backgroundColor:'#fff',
            borderRadius:50,
            }}
    >
    <Icon name={"add-outline"}  size={300} color="#01a699" />
    </TouchableOpacity>
}

export default invitebutton;
import react, {useState} from 'react';
import { View, Text,TextInput, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'


const InvitePage= ({navigation}) => {
    const capacity = 5 
    const [invitees, setInvitees] = useState('');
    return(
        <View style={styles.InviteContainerStyle}>
            <Text style={styles.headerStyle}>Invite up to {capacity} people </Text>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Enter username or email"
                placeholderTextColor="#808080"
                onChangeText={(invitees) => setInvitees(invitees)}
                />
            </View>
            <TouchableOpacity  onPress={()=>navigation.navigate("CreateEvent")} style={styles.submitBtn} >
                <Text style={{color: '#ffffff'}}>Invite</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("CreateEvent")} style={styles.cancelBtn}>
                <Text>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    InviteContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginStart: 20,
    },
    inviteBoxView:{
        flexDirection: 'column'
    },
    labelStyle:{
        fontSize: 15,
    },
    inputView: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#808080',
        width: '90%',
        height: 45,
        marginTop: 20,

        alignItems: 'center',
  },
    TextInput: {
        display: "flex",
        height: 50,
        flex: 1,
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
    },
    cancelBtn: {
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#808080',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#F5F5F5',
    },
      submitBtn: {
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#808080',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#000000',
      },
});
export default InvitePage;
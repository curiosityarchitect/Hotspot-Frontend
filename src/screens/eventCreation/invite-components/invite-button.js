import { View, Text, TouchableOpacity,  StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements';

const InviteButton= ({navigation}) => {
    return (
        
            <View style={styles.inviteButtonContainerStyle}>
                <View style={styles.inviteButtonStyle}>
                    <Icon name={"send"}  size={15} color="#D2B48C" />
                    <Text style={styles.inviteButtonTextStyle}>invite</Text>
                </View>
            </View>
      );
    }
    
    const styles = StyleSheet.create({
        inviteButtonContainerStyle: {
          flex: 1,
        },
        inviteButtonStyle: {
            flexDirection: 'row',
            width: '70%',
            borderRadius: 3,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            backgroundColor: '#ffffff',
            borderWidth: 0.2,
            borderColor: '#D2B48C',
        },
        inviteButtonTextStyle: {
          color: '#777777',
          fontSize: 10,
          marginStart:5,
      },
    });
      

export default InviteButton;
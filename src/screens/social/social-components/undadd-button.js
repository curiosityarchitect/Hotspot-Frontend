import { View, Text, TouchableOpacity,  StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements';

const UnaddButton = ({navigation}) => {
    return (
        
        <View style={styles.removeButton}>
            <Icon name={"person-remove"}  size={15} color="#D2B48C" />
        </View>
      );
    }


const styles = StyleSheet.create({
    removeButton: {
        width: 20,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
        width: 2,
        height: 2,
        },
        shadowOpacity: 0.222,
    }
});

export default UnaddButton;
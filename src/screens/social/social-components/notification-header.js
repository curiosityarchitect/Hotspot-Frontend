import {View, Text, StyleSheet,Dimensions} from 'react-native';

const DeviceWidth = Math.round(Dimensions.get('window').width);
const DeviceHeight = Math.round(Dimensions.get('window').height);

const NotificationHeader = () => {
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.headerTextStyle}>Notifications</Text>
        </View>
    )
}

const styles=StyleSheet.create({
   headerStyle:{
        backgroundColor: '#ffffff',
        width: DeviceWidth,
        height: DeviceHeight*0.1,
   },
    headerTextStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: 44,
    },
})

export default NotificationHeader;
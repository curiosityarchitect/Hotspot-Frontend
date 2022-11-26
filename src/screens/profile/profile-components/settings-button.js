import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';


const SettingsButton = () => {
  return (
    <View style={styles.settingsButtonContainerStyle}>
      <View style={styles.settingsButtonStyle}>
        <Icon name={"settings"}  size={15} color="#D2B48C" />
        <Text style={styles.settingsButtonTextStyle}>settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    settingsButtonContainerStyle: {
      flex: 1,
    },
    settingsButtonStyle: {
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
    settingsButtonTextStyle: {
      color: '#777777',
      fontSize: 10,
      marginStart:5,
  },
});
  

export default SettingsButton;
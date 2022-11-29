import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const EventLabels = ({name,desc}) => {
    return(
        <View style={styles.container}> 
            <Icon
             name = {name}
             type = 'ionicon'
             color = '#8b0000' 
             size = {13}
             style={styles.iconStyle}
             />
            <Text style={styles.lableStyle}>{desc}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lableStyle: {
        fontSize: 10,
    },
    iconStyle:{
        marginRight: 3,
        fontWeight: 10,
    },
})


export default EventLabels;

import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements';

const GroupScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Groups</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  createBtn: {
    width: '30%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#FFFFFF',
  },

  createText: {
    color: 'white',
  },
});

export default GroupScreen;
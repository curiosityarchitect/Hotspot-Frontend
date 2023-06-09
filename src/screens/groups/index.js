import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const GroupScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    backgroundColor: '#000000',
  },

  createText: {
    color: 'white',
  },
});

export default GroupScreen;
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements';

const GroupScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Groups</Text>

      <TouchableOpacity onPress={()=>navigation.navigate("UserSearch")} style={styles.createBtn}>
        <Text style={styles.createText}>Search User</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("EventSearch")} style={styles.createBtn}>
        <Text style={styles.createText}>Search Event</Text>
      </TouchableOpacity>

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
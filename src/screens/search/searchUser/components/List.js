import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ navigation, name }) => (
  <View style={styles.item}>
    <TouchableOpacity onPress={() => navigation.navigate("ExternalProfileScreen", {username: name})}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  </View>
);

// the filter
const List = (props) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    // when no input, show all
    if (props.searchPhrase === "") {
      return <Item navigation={navigation} name={item.username} />;
    }
    // filter of the name
    if (item.username.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item navigation={navigation} name={item.username} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 10,
    marginLeft: 20,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
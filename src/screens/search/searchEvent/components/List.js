import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, description }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

// the filter
const List = (props) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    // when no input, show all
    if (props.searchPhrase === "") {
      return <TouchableOpacity onPress={() => 
        navigation.navigate("EventDetails", {eventid: item._id})}>

        <Item name={item.name} description={item.description} />
      </TouchableOpacity>;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <TouchableOpacity onPress={() => 
        navigation.navigate("EventDetails", {eventid: item._id})}>

        <Item name={item.name} description={item.description} />
      </TouchableOpacity>;
    }
    // filter of the description
    if (item.description.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <TouchableOpacity onPress={() => 
        navigation.navigate("EventDetails", {eventid: item._id})}>

        <Item name={item.name} description={item.description} />
      </TouchableOpacity>;
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
    marginStart: 20,
    marginEnd: 20,
    paddingBottom: 10,
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
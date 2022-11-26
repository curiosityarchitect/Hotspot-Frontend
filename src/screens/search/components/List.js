import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


// definition of the Item, which will be rendered in the FlatList
const Item = ({ description, id }) => (

  <View style={styles.item}>
    <TouchableOpacity>
        <Text style={styles.title}>{description}</Text>
        <Text style={styles.title}>{id}</Text>
    </TouchableOpacity>
  </View>
);

// the filter
const List = (props) => {
  
  const renderItem = ({ item }) => {   

    // when no input, show all

    if (props.searchPhrase === "") {
      return (
        <Item description={item.description} id={item.eventid} />
      )
    }
    // filter of the name
    if (item.description.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item description={item.description} id={item.eventid} />;
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
          keyExtractor={(item) => item.id}
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
    margin: 30,
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
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import axios from 'axios';
import List from "./components/List";
import SearchBar from "./components/SearchBar";
import { backendUrl } from "../../../services/const";

const UserSearchScreen = ({navigation}) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`${backendUrl}/users`)
    .then((response) => {
      const allData = response.data;
      setFakeData(allData);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <SafeAreaView style={styles.root}>
      {!clicked}

      <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.backBtn}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {!fakeData ? (
        <ActivityIndicator size="large" />
      ) : (
        
          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />
        
      )}
    </SafeAreaView>
  );
};

export default UserSearchScreen;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
  backBtn: {
    width: '20%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#808080',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#000000',
  },
  backText: {
    color: 'white',
  },
});
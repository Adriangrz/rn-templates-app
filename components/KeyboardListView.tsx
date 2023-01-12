import React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type ItemProps = {
  title: string;
};

const items: string[] = [...Array(10).keys()].map((number) => `item${number}`);

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const KeyboardListView = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={items}
            renderItem={({ item }) => <Item title={item} />}
            keyExtractor={(item) => item}
          />
          <TextInput style={styles.input} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
  },
  item: {
    backgroundColor: "#e2e2e2",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

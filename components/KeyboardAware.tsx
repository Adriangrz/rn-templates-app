import React from "react";
import { StyleSheet, TextInput, View, Text, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const KeyboardAware = () => {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>Username:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Name:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Last name:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Address:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Phone:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Password:</Text>
          <TextInput style={styles.input} />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#e2e2e2",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
  },
  title: {
    fontSize: 32,
  },
});

import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

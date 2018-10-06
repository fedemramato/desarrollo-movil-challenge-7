import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
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

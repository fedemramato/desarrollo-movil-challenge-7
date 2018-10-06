import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Your Profile</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
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

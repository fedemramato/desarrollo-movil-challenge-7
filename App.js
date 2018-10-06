import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";

const RootStack = createBottomTabNavigator({
  Home: Home,
  Profile: Profile,
  Settings: Settings
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

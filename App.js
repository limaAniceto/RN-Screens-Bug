import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { enableScreens } from "react-native-screens";

import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

enableScreens();

class HomeScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Home Screen</Text>

                <TouchableHighlight
                    onPress={() => this.props.navigation.push("Modal")}
                >
                    <Text>Button</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

class ModalScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Modal Screen</Text>

                <TouchableHighlight
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Text>Button</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Modal: {
            screen: ModalScreen,
        },
    },
    {
        headerMode: "none",
        mode: "modal",
        cardStyle: {
            opacity: 1,
        },
    }
);

export default createAppContainer(AppNavigator);
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

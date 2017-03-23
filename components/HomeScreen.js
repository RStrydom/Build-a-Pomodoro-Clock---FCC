import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback } from 'react-native';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableWithoutFeedback onPress={() => navigate('Timer')}>
                <View style={styles.container}>
                    <StatusBar hidden={true} />
                    <Text style={styles.msg}>
                        Hello Friend
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    msg: {
        color: '#FFF',
        fontFamily: 'Lato-Light',
        fontSize: 60,
    },
});

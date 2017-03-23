import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback } from 'react-native';

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            time: 1499,
            minutes: 24,
            seconds: 59,
        }
    }

    static navigationOptions = {
        // title: 'Timer',
        header: {
            visible: true,
            style: {
                backgroundColor: '#000',
            },
            titleStyle: {
                color: '#FFF',
            }
        }
        // right: (
        //     <Button
        //         title={state.params.editing ? 'Done' : 'Edit'}
        //         onPress={() => setParams({editing: state.params.editing ? false : true})}
        //     />
        // ),
        // left: (
        //     <Button
        //         title={state.params.editing ? 'Done' : 'Edit'}
        //         onPress={() => setParams({editing: state.params.editing ? false : true})}
        //     />
        // ),
    };

    render() {
        const { goBack } = this.props.navigation;
        return (
            <TouchableWithoutFeedback onPress={() => goBack()}>
                <View style={styles.container}>
                    <StatusBar hidden={true} />
                    <Text style={styles.timer}>
                        <Text style={styles.timerMinutes}>{this.state.minutes}</Text>
                        <Text style={styles.timerDot}>.</Text>
                        <Text style={styles.timerSeconds}>{this.state.seconds}</Text>
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
    timer: {
        color: '#FFF',
        fontFamily: 'Lato-Light',
    },
    timerMinutes: {
        fontSize: 120,
    },
    timerDot: {
        fontSize: 60,
        marginLeft: 2.5,
        marginRight: 2.5,
    },
    timerSeconds: {
        fontSize: 80,
    },
});

import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Header from './Header';

const Alert = props => {
    const {error, refresh} = props;
    return (
        <View>
            <Header refresh={refresh} isRefresh={true}/>
            <View style={styles.container}>
                <Text style={styles.title}>{error}</Text>
            </View>
        </View>
    )
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: window.width,
        height: window.height
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
})

export default Alert;

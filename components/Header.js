import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const Header = props => {
    const backHandling = () => {
        props.navigation.replace('Home');
    }
    return (
        <View style={styles.container}>
            <Button style={styles.back} title='<' onPress={backHandling}></Button>
            <Text style={styles.title}>XKCD</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomColor: "#000",
        borderBottomWidth: 1
    },
    back: {
        flex: 1,
        width: 100,
        fontSize: 40,
        color: '#000'
    },
    title: {
        fontSize: 30,
    }
})

export default Header;

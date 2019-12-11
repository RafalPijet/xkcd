import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Header = props => {
    const {hide} = props;
    const backHandling = () => {
        props.navigation.replace('Home');
    }
    if (hide) {
        const {refresh} = props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={refresh} style={styles.arrowTitle}>
                    <Image style={styles.icon} source={require('../assets/reload.png')}/>
                </TouchableOpacity>
                <Text style={styles.title}>XKCD</Text>
                <Text style={styles.title}> </Text>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={backHandling} style={styles.arrowTitle}>
                    <Image style={styles.icon} source={require('../assets/back.png')}/>
                </TouchableOpacity>
                <Text style={styles.title}>XKCD</Text>
                <Text style={styles.title}> </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: "#000",
        borderBottomWidth: 1
    },
    arrowTitle: {
        paddingLeft: 5
    },
    title: {
        fontSize: 30,
    },
    icon: {
        width: 20,
        height: 20
    }
})

export default Header;

import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const HeaderRow = props => {
    const {onPress, icon, title} = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.iconBox}>
                <Image style={styles.icon} source={icon}/>
            </TouchableOpacity>
            <View style={styles.titleBox}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        backgroundColor: '#f5f5f8'
    },
    iconBox: {
        paddingLeft: 5
    },
    titleBox: {
        width: '100%',
        paddingRight: 50
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    icon: {
        width: 20,
        height: 20
    }
})

export default HeaderRow;

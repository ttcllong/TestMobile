import { View, Text, StyleSheet } from 'react-native';
import React, {memo} from 'react';

function HeaderContent() {
    return (
        <View style={styles.container}>
            <Text style={styles.text_header_1}>
                A joke a day keeps the doctor away
            </Text>
            <Text style={styles.text_header_2}>
                If you joke wrong way, your teeth have to pay. (Serious)
            </Text>
        </View>
    );
}

export default memo(HeaderContent)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(41, 179, 99, 1)',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_header_1:{
        color: 'white', 
        fontSize: 20,
        fontWeight: '500' 
    },
    text_header_2:{
        color: 'white', 
        fontSize: 14,
        fontWeight: '400', 
        marginTop: 20 
    }
});

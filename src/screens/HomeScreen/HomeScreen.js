import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppBar from './component/AppBar';
import HeaderContent from './component/HeaderContent';
import BodyContent from './component/BodyContent';
import BottomContent from './component/BottomContent';

export default function HomeScreen() {
    return (
        <View style = {styles.container}>
            <AppBar />
            <HeaderContent />
            <BodyContent />
            <BottomContent />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

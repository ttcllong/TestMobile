import { View, Text, StyleSheet } from 'react-native';
import React, {memo} from 'react';

function BottomContent() {
    return (
        <View style={style.container}>
            <View style={{ height: 1, backgroundColor: 'rgba(235, 235, 235, 1)' }}></View>
            <View
                style={style.view_content}>
                <Text
                    style={style.text_content_1}>
                    This appis create as part of Hisolutions program. The
                    material con-tained on this website are provided for general
                    information only and do not constitute any form of advice.
                    HLS assumes no responsibility for the accuracy of any
                    particular statement and accepts no liability for any loss
                    or damage which may arise from reliance on the information
                    contained on this site
                </Text>
                <Text
                    style={style.text_content_2}>
                    Copyright 2021 HLS
                </Text>
            </View>
        </View>
    );
}
export default memo(BottomContent)

const style = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center'
    },
    view_content:{
        paddingHorizontal: 10,
        alignItems: 'center',
        marginTop: 5
    },
    text_content_1: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 8,
        color: 'rgba(150, 150, 150, 1)'
    },
    text_content_2:{
        color: 'rgba(100, 100, 100, 1)', 
        fontSize: 16, 
        fontWeight: '500'
    }
});

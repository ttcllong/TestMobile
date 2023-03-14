import { View, Text, StyleSheet, Image } from 'react-native';
import React, {memo} from 'react';

function AppBar() {
    return (
        <View style={styles.container}>
            <View style={styles.view_content}>
                <View>
                    <Image
                        source={{
                            uri: 'https://png.pngtree.com/png-vector/20220627/ourmid/pngtree-boat-and-a-circle-logo-template-png-image_5492017.png'
                        }}
                        style={styles.image_logo}
                    />
                </View>
                <View style={styles.view_user}>
                    <View style = {{alignItems: 'flex-end'}}>
                        <Text style = {styles.text_name_1}>Handicrafted by</Text>
                        <Text style = {styles.text_name_2}>Jim HLS</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Image
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKeij3wKmU-fOZWBwJpoHoYSuQYff2-Lp_e-BCs5JafkG_O7dnD4FUeUBpdcMmzJ_6c8&usqp=CAU'
                            }}
                            style={styles.image_user}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}
export default memo(AppBar)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    view_content: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    image_logo: {
        width: 65,
        height: 65
    },
    image_user: {
        width: 35,
        height: 35,
        borderRadius: 40
    },
    view_user: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_name_1:{
        color: 'rgba(150, 150, 150, 1)',
        fontSize: 15
    },
    text_name_2:{
        color: 'rgba(75, 75, 75, 1)',
        fontSize: 13
    }
});

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
import React, { useState } from 'react';

const list_jokes = [
    {
        id: 1,
        content: `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`
    },
    {
        id: 2,
        content: `Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`
    },
    {
        id: 3,
        content: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`
    },
    {
        id: 4,
        content: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`
    }
];

export default function BodyContent() {
    const [paragraph, setParagraph] = useState(1);
    const length = list_jokes.length + 1;
    
    const changeText = () => {
        setParagraph((prev) => prev + 1);
    };

    const resetText = () => {
        setParagraph((prev) => (prev = 1));
    };

    const renderItemParagraph = ({ item }) => {
        return (
            <View>
                {item.id === paragraph && (
                    <Text style={{ textAlign: 'justify', fontSize: 16,color: 'rgba(100, 100, 100, 1)' }}>
                        {item.content}
                    </Text>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {paragraph === length ? (
                <View style={{ flex: 1 }}>
                    <View
                        style={styles.view_text_review}>
                        <Text style = {styles.text_review}>
                            That's all the jokes for today! Come back another day!
                        </Text>
                    </View>
                    <View
                        style={styles.view_button_review}>
                        <TouchableOpacity
                            onPress={() => resetText()}
                            style={styles.button_review}>
                            <Text style={styles.button_review_text}>
                                Review the jokes
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                        <FlatList
                            data={list_jokes}
                            renderItem={renderItemParagraph}
                        />
                    </View>
                    <View
                        style={styles.view_button}>
                        <TouchableOpacity
                            onPress={() => changeText()}
                            style={styles.view_button_like}>
                            <Text
                                style={styles.text_button_like}>
                                This is Funny!
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => changeText()}
                            style={styles.view_button_unlike}>
                            <Text
                                style={styles.text_button_unlike}>
                                This is not funny.
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 6
    },
    view_button:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    view_button_like:{
        backgroundColor: 'rgba(44, 126, 219, 1)',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    text_button_like:{
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
    view_button_unlike:{
        backgroundColor: 'rgba(41, 179, 99, 1)',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    text_button_unlike:{
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
    view_text_review:{
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 50
    },
    text_review:{
        fontSize: 14,
        color: 'rgba(100, 100, 100, 1)'
    },
    view_button_review:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20
    },
    button_review:{
        backgroundColor: 'rgba(44, 126, 219, 1)',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    button_review_text:{
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    }
});

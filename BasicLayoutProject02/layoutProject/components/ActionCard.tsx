import {
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.headercontainer}>
                        <Text style={styles.headertext}>Flexbox in React Native!</Text>
                        <Image
                            style={styles.blogImage}
                            source={{
                                uri: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*duHjEv7_AnJj4UtB6gV2_Q.jpeg',
                            }}
                        />
                    </View>
                    <View style={styles.bodyContainer}>
                        <Text style={styles.bodyText} numberOfLines={4}>
                            If you have a web design or development background, you may be
                            familiar with flexbox. It’s an opt-in CSS tool that enables you to
                            build layouts based on columns and rows. In React Native, this is
                            the default way to build layouts. It works wonderfully for mobile
                            development because it allows us to build layouts that fit
                            multiple screen sizes, thanks to responsive design. In this
                            tutorial, we’ll cover: Developing with flexbox for React Native
                            and the web What are the properties of flexbox? How do you use the
                            flex property in React Native? How do you make a grid in flexbox?
                            How do you make a flexbox card?
                        </Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            onPress={() =>
                                openWebsite(
                                    'https://blog.logrocket.com/using-flexbox-react-native/'
                                )
                            }>
                            <Text style={styles.footerText}>Read More</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                openWebsite('https://github.com/yadavNishant2020')
                            }>
                            <Text style={styles.footerText}>Follow Me</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    container: {
        height: 400,
        // width: 350,
        backgroundColor: '#D6DAC8',
        margin: 15,
        borderRadius: 8,
        elevation: 10
    },
    card: { flex: 1, justifyContent: 'space-between' },
    headercontainer: {
        alignItems: 'center',
    },
    headertext: {
        fontSize: 18,
        paddingVertical: 10,
        fontWeight: 'bold',
        color: '#000000'
    },
    blogImage: {
        height: 200,
        width: '100%',
    },
    bodyContainer: {
        padding: 10,
    },
    bodyText: {
        color: '#000000',
        lineHeight: 24
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
    },
    footerText: {
        color: '#008DDA',

    },
});
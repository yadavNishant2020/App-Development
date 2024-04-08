import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function TrendingPlaceCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.card1]}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://assets.editorial.aetnd.com/uploads/2009/12/topic-statue-of-liberty-gettyimages-960610006-feature.jpg',
                        }}
                    />
                    <View style={styles.descriptionConatiner}>
                        <Text style={[styles.descriptionHeading, styles.text]}>
                            Statue Of Liberty
                        </Text>
                        <Text style={[styles.description, styles.text]}>
                            The Statue of Liberty is a colossal neoclassical sculpture on
                            Liberty Island in New York Harbor in New York City, United States.
                            The copper statue, a gift from the people of France, was designed
                            by French sculptor Frédéric Auguste Bartholdi and its metal
                            framework was built by Gustave Eiffel.
                        </Text>
                        <Text style={styles.text}>
                            New York, NY 10004, USA
                        </Text>
                        <Text style={styles.text}>50 miles away</Text>
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
        height: '150%',
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        width: 100,
        height: 450,
        borderRadius: 8,
        margin: 10,
        flex: 1,
        justifyContent: 'space-between',
        elevation: 3,
    },
    text: {
        color: '#000000',
    },
    card1: {
        backgroundColor: '#E78895',
        color: '#000000',
    },
    descriptionHeading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 12,
    },
    image: {
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        resizeMode: 'cover',
    },
    descriptionConatiner: {
        flex: 1,
        gap: 15,
        padding: 20,
    },
});
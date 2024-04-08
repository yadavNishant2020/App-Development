import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Nishant Yadav',
      status: 'Not your ordinary developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/75436573?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contacts</Text>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          {contacts.map(({ uid, name, status, imageUrl }) => (
            <View style={styles.list} key={uid}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.userImage}
              />
              <View style={styles.listtextConatiner} key={uid}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userstatus}>{status}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container: {
    margin: 20,
  },
  listContainer: {
    gap: 15
  },
  listtextConatiner: {
    paddingLeft:20,
     gap: 5
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  userstatus: {
      fontSize: 15,
  },
});
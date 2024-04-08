import {SafeAreaView, ScrollView} from 'react-native';
import React, {Component} from 'react';
import FlatCards from './components/FlatCards';
import ELevatedCards from './components/ELevatedCards';

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
          <ELevatedCards />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;

// import { StyleSheet, Text, View, Image } from 'react-native';
// import React from 'react';

// export default function TrendingPlaceCard() {
//   return (
//     <View>
//       <Text style={styles.headingText}>Trending Places</Text>
//       <View style={styles.container}>
//         <View style={[styles.card, styles.card1]}>
//           <Image
//             style={styles.image}
//             source={{
//               uri: 'https://assets.editorial.aetnd.com/uploads/2009/12/topic-statue-of-liberty-gettyimages-960610006-feature.jpg',
//             }}
//           />
//           <View style={styles.descriptionConatiner}>
//             <Text style={[styles.descriptionHeading, styles.text]}>
//               Statue Of Liberty
//             </Text>
//             <Text style={[styles.description, styles.text]}>
//               The Statue of Liberty is a colossal neoclassical sculpture on
//               Liberty Island in New York Harbor in New York City, United States.
//               The copper statue, a gift from the people of France, was designed
//               by French sculptor Frédéric Auguste Bartholdi and its metal
//               framework was built by Gustave Eiffel.
//             </Text>
//             <Text style={styles.text}>
//               New York, NY 10004, USA
//             </Text>
//             <Text style={styles.text}>50 miles away</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   headingText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//   },
//   container: {
//     height: 150,
//     flex: 1,
//     flexDirection: 'row',
//     padding: 8,
//   },
//   card: {
//     width: 100,
//     height: 450,
//     borderRadius: 8,
//     margin: 10,
//     flex: 1,
//     justifyContent: 'space-between',
//     elevation: 3,
//   },
//   text: {
//     color: '#000000',
//   },
//   card1: {
//     backgroundColor: '#E78895',
//     color: '#000000',
//   },
//   descriptionHeading: {
//     fontSize: 20,
//     fontWeight: 'bold'
//   },
//   description: {
//     fontSize: 12,
//   },
//   image: {
//     width: '100%',
//     height: '50%',
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//     resizeMode: 'cover',
//   },
//   descriptionConatiner: {
//     flex: 1,
//     gap: 15,
//     padding: 20,
//   },
// });

// import {
//   StyleSheet,
//   Text,
//   View,
//   Linking,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';

// export default function ActionCard() {
//   function openWebsite(websiteLink: string) {
//     Linking.openURL(websiteLink);
//   }
//   return (
//     <View>
//       <Text style={styles.headingText}>Blog Card</Text>
//       <View style={styles.container}>
//         <View style={styles.card}>
//           <View style={styles.headercontainer}>
//             <Text style={styles.headertext}>Flexbox in React Native!</Text>
//             <Image
//               style={styles.blogImage}
//               source={{
//                 uri: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*duHjEv7_AnJj4UtB6gV2_Q.jpeg',
//               }}
//             />
//           </View>
//           <View style={styles.bodyContainer}>
//             <Text numberOfLines={4}>
//               If you have a web design or development background, you may be
//               familiar with flexbox. It’s an opt-in CSS tool that enables you to
//               build layouts based on columns and rows. In React Native, this is
//               the default way to build layouts. It works wonderfully for mobile
//               development because it allows us to build layouts that fit
//               multiple screen sizes, thanks to responsive design. In this
//               tutorial, we’ll cover: Developing with flexbox for React Native
//               and the web What are the properties of flexbox? How do you use the
//               flex property in React Native? How do you make a grid in flexbox?
//               How do you make a flexbox card?
//             </Text>
//           </View>
//           <View style={styles.footerContainer}>
//             <TouchableOpacity
//               onPress={() =>
//                 openWebsite(
//                   'https://blog.logrocket.com/using-flexbox-react-native/'
//                 )
//               }>
//               <Text style={styles.footerText}>Read More</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() =>
//                 openWebsite('https://github.com/yadavNishant2020')
//               }>
//               <Text style={styles.footerText}>Follow Me</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   headingText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//   },
//   container: {
//     height: 400,
//     width: 350,
//     backgroundColor: '#D6DAC8',
//     margin: 15,
//     borderRadius: 8,
//     elevation: 10
//   },
//   card: { flex: 1, justifyContent: 'space-between' },
//   headercontainer: {
//     alignItems: 'center',
//   },
//   headertext: {
//     fontSize: 18,
//     paddingVertical: 10,
//     fontWeight: 'bold',
//   },
//   blogImage: {
//     height: 200,
//     width: '100%',
//   },
//   bodyContainer: {
//     padding: 10,
//   },
//   footerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 15,
//   },
//   footerText: {
//     color: '#008DDA',
//   },
// });

// import { StyleSheet, Text, View, Image } from 'react-native';
// import React from 'react';

// export default function ContactList() {
//   const contacts = [
//     {
//       uid: 1,
//       name: 'Nishant Yadav',
//       status: 'Not your ordinary developer',
//       imageUrl: 'https://avatars.githubusercontent.com/u/75436573?v=4',
//     },
//     {
//       uid: 2,
//       name: 'Anurag Tiwari',
//       status: 'I ❤️ To Code and Teach!',
//       imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
//     },
//     {
//       uid: 3,
//       name: 'Sanket Singh',
//       status: 'Making your GPay smooth',
//       imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
//     },
//     {
//       uid: 4,
//       name: 'Anirudh Jwala',
//       status: 'Building secure Digital banks',
//       imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
//     },
//   ];
//   return (
//     <View>
//       <Text style={styles.headingText}>Contacts</Text>
//       <View style={styles.container}>
//         <View style={styles.listContainer}>
//           {contacts.map(({ uid, name, status, imageUrl }) => (
//             <View style={styles.list} key={uid}>
//               <Image
//                 source={{
//                   uri: imageUrl,
//                 }}
//                 style={styles.userImage}
//               />
//               <View style={styles.listtextConatiner} key={uid}>
//                 <Text style={styles.userName}>{name}</Text>
//                 <Text style={styles.userstatus}>{status}</Text>
//               </View>
//             </View>
//           ))}
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   headingText: {
//     marginTop: 10,
//     fontSize: 24,
//     fontWeight: 'bold',
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//   },
//   container: {
//     margin: 20,
//   },
//   listContainer: {
//     gap: 15
//   },
//   listtextConatiner: {
//     paddingLeft:20,
//      gap: 5
//   },
//   list: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   userImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 60 / 2,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   userstatus: {
//       fontSize: 15,
//   },
// });

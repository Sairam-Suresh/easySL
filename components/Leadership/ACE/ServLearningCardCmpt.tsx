// Card for service learning with many configurable options
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Alert, Pressable } from 'react-native';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Colors from '../../../constants/Colors';
import { Text, View } from '../../Themed';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { FirebaseApp, initializeApp } from "firebase/app";
import { useEffect } from 'react';
import { getFirestore, setDoc, doc, getDoc, collectionGroup, getDocs, collection } from '@firebase/firestore';
var uuid = require('random-uuid-v4');

// @ts-ignore
export default function LeadershipACECard(props) {
  const firebaseConfig = {
    apiKey: "AIzaSyA38DBezI6phXNGJ1QRdRbzGvoIy0JSErQ",
    authDomain: "sleazy-f623b.firebaseapp.com",
    projectId: "sleazy-f623b",
    storageBucket: "sleazy-f623b.appspot.com",
    messagingSenderId: "381172004045",
    appId: "1:381172004045:web:b2c8747f1920f9920ba584"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    async function retrieve() {
      // PUSH DATA TO FIRESTORE DATABASE
      // await setDoc(doc(db, "ACEServiceLearningProjs", uuid()), {
      //   Description: "World",
      //   Title: "Hello",
      //   isApproved: false,
      //   isDisplayed: false,
      //   imageURL: "", 
      //   isRecommendedChange: true,
      //   recommendedChangeMessage: {
      //     ID: 1,
      //     isResolved: true,
      //     message: "g",
      //   },
      // });

      // Read Specific firebase document
      // console.log(await (await getDoc(doc(db, "ACEServiceLearningProjs"))).data())

      // Read All firebase documents
      //await (await getDocs(collection(db, "ACEServiceLearningProjs"))).forEach((doc) => {console.log(doc.id, " => ", doc.data());})
    }

    retrieve()
  }, [])

  return (
    <View style={styles.serviceLearningDatacontainer}>
      {/* Using Pressable here because a Normal View breaks styling */}
      <Pressable style={styles.serviceLearningPaddingContainer} >
        <Grid>
          <Col size={8}><Text style={ { fontSize:"20%", color: "lightgreen" } }>✅Approved and Displayed</Text></Col>
          <Col size={1}>
            <Pressable
            onPress={() => {}}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <MaterialIcons
              name="assignment-return"
              size={"26%"}
              color={"white"}
              style={{}}
            />
            </Pressable>
          </Col>
          <Col size={1}>
            <Pressable
            onPress={() => {Alert.prompt("Are you sure?", "Are you sure you want to recommend a change? If so, enter your message and press OK, if not, press cancel", 
            [
              {
                text: 'Cancel',
                onPress: () => { {/* Cancelling does nothing */} },
                style: 'cancel',
              },
              {
                text: 'Ok',
                onPress: () => {}, //TODO: Need to make it delete the thing
                style: 'destructive',
              },
            ],
            )}}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <Ionicons
              name="trash"
              size={"23%"}
              color={"white"}
              style={{}}
            />
            </Pressable>
          </Col>
        </Grid>
      </Pressable>
      <View style={styles.adminStripSeparator} />


      <TouchableOpacity style={styles.serviceLearningPaddingContainer}>
        {/* @ts-ignore */}
        <Text style={styles.titleText}>{props.title}</Text>
        {props.imageURI === null ? 
          <Image
            style={styles.tinyLogo}
            source={{
              uri: props.imageURI,
            }}
          /> : <View/>
        }
        <Text style={styles.descText}>{props.description}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Custom Styles
  serviceLearningDatacontainer : {
    backgroundColor: "grey", 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  titleText: {
    fontSize: "30%",
    paddingBottom: "1%",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  descText: {
    paddingTop: "1%",
    fontsize: "15%",
  },
  adminStripSeparator: {
    borderBottomColor: "black",
    borderWidth: "1%",
  },
  serviceLearningPaddingContainer: {
    padding: "2%",
  }
});
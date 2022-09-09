// Card for service learning with many configurable options
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Alert, Pressable } from 'react-native';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Colors from '../../../constants/Colors';
import { Text, View } from '../../Themed';
import { Grid, Row, Col } from 'react-native-easy-grid';

// @ts-ignore
export default function LeadershipACECard(props) {  
    return (
      <View style={styles.serviceLearningDatacontainer}>
        {/* Using Pressable here because a Normal View breaks styling */}
        <Pressable style={styles.serviceLearningPaddingContainer} >
          <Grid>
            <Col size={8}><Text style={ { fontSize:"20%" } }>Approved and Displayed</Text></Col>
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
  
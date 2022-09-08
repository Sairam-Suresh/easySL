// Card for service learning with many configurable options
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../../Themed';

// @ts-ignore
export default function LeadershipACECard(props) {  
    return (
        <View style={styles.container}>
          <TouchableOpacity>
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
  container : {
    backgroundColor: "grey",
    padding: "2%",
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
  }

});
  
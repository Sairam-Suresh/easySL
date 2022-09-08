import { ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import LeadershipACECard from '../../components/Leadership/ACE/ServLearningCardCmpt';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

/*
The app should be able to:
- Public can contribute ideas for service learning
- Students can get their projects rated online
- ACE Leaders can have more abmin privileges over the posts
- ACE Leaders can also approve or reject submissions of service learning

*/


export default function Leadership({ navigation }: RootTabScreenProps<'LeadershipACE'>) {
  const myfunc = () => {
    console.log('hello hey sexy')
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.appContainer}>
          <LeadershipACECard title="Hello world" description="This is our service learning Project"/>
          <LeadershipACECard title="Hello world" description="This is our service learning Project"/>
          <LeadershipACECard title="Hello world" description="This is our service learning Project"/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Template Styles
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  // Custom Styles
  appContainer: {
    margin: "2%",
  }
});

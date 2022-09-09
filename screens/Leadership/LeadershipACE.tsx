import { FlatList, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import LeadershipACECard from '../../components/Leadership/ACE/ServLearningCardCmpt';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

/*
The app should be able to: TODO:
- Public can contribute ideas for service learning
- Students can get their projects rated online
- ACE Leaders can have more abmin privileges over the posts
- ACE Leaders can also approve or reject submissions of service learning

*/


export default function Leadership({ navigation }: RootTabScreenProps<'LeadershipACE'>) {
  const DATA = [
    {title: "This is my service learning", description: "This is my service learning Project guyssssss :D", ID: 1},
    {title: "This is my service learning 2", description: "This is my service learning Project guyssssss :D 222", ID: 2},
    {title: "This is my service learning 3", description: "This is my service learning Project guyssssss :D 333", ID: 3},
    {title: "This is my service learning 3", description: "This is my service learning Project guyssssss :D 333", ID: 4},
    {title: "This is my service learning 3", description: "This is my service learning Project guyssssss :D 333", ID: 5},
    {title: "This is my service learning 3", description: "This is my service learning Project guyssssss :D 333", ID: 6},
    {title: "This is my service learning 3", description: "This is my service learning Project guyssssss :D 333", ID: 7},
    {title: "This is my service learning 3", description: "This is my service learning Project guyssssss :D 333", ID: 8},
    {title: "This is my service learning 3", description: "This is my service learning Project guyssssss :D 333", ID: 9},
    {title: "This is my service learning 3", description: "This is my service learning Project guyssssss :D 333", ID: 10},
  ]

  return (
      <View>
        <View style={styles.appContainer}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <View>
                <LeadershipACECard title={item.title} description={item.description} />
                <View style={styles.separator} /> 
              </View>
            )}
            keyExtractor={(item: { ID: any; }) => item.ID}
          />
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  // Template Styles
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: "2%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: "2%",
    height: 1,
    width: '80%',
  },

  // Custom Styles
  appContainer: {
    margin: "2%",
  }
});

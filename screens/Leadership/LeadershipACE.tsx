import { ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function Leadership({ navigation }: RootTabScreenProps<'LeadershipACE'>) {
  const myfunc = () => {
    console.log('hello hey sexy')
  };

  return (
      <View>
        <Text style={styles.appContainer}>Hello</Text>
      </View>
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

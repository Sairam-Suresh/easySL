import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Template({ navigation }: RootTabScreenProps<'-'>) {

  return (
      <View>
        <TouchableOpacity>Hello World</TouchableOpacity>
      </View>
  );

}

const styles = StyleSheet.create({

});

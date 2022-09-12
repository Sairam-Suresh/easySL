import React from 'react';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';


import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function Login({ navigation }: RootTabScreenProps<'Login'>) {

  return (
      <View>
        <Pressable onPress={() => {navigation.navigate("Home")}}>
          <Text>Home</Text>
        </Pressable>
      </View>
  );

}

const styles = StyleSheet.create({

});
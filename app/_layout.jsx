import {View, Text} from "react-native";
import React from "react";
import {Stack} from "expo-router";

const RootLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Stack>
        <Stack.Screen name='index' options={{headerShown: false}} />
        <Stack.Screen name='profile' />
      </Stack>
      <Text>Footer</Text>
    </>
  );
};

export default RootLayout;

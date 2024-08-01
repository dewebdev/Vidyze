import {View, Text} from "react-native";
import React from "react";
import {Link} from "expo-router";

const index = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl '>Vidyze</Text>
      <Link href='/profile' className='text-blue-700'>
        Go to profile
      </Link>
    </View>
  );
};

export default index;

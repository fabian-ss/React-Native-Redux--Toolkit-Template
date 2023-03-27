import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"

const HomeScreenNotes = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text style={tw`text-red-500 p-10`}>Home Screen Notes</Text>
    </SafeAreaView>
  )
}

export default HomeScreenNotes
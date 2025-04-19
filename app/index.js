import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import Home from "@/Screens/Home"
import RootLayout from "./_layout";
export default function Index() {

  return (
    <SafeAreaView >
      <View >
        <RootLayout />
      </View >
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6d3535',
  },
  title: {
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

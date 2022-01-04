import { Text, View ,Button} from "react-native";
import React from 'react';
export default HomeScreen=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#ff0'}}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
     
    );
  }
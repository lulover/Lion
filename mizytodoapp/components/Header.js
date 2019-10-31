import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Header() {
    return (
      <View style ={styles.headercontainer}>
        <Text style={styles.headertext}>My TodoApp</Text>
      </View>
    );
  };  

const styles = StyleSheet.create({
headerContainer:{
marginTop:70,
marginBotton:40,
},
headerText: {
fontSize: 26,
fontWeight: 'bold',
color:'#3f4e66',
},
})

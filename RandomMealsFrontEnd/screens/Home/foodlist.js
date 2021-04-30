import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            veckodag: 'Måndag',
            namn: 'Korvstroganoff',
         },
         {
            id: 1,
            veckodag: 'Tisdag',
            namn: 'Fnösfärsbös Å spaghetti',
         },
         {
            id: 2,
            veckodag: 'Onsdag',
            namn: 'Grillad aubergine',
         },
         {
            id: 3,
            veckodag: 'Torsdag',
            namn: 'Köttbullar å mos',
         },
         {
            id: 4,
            veckodag: 'Fredag',
            namn: 'Tofubowl',
         },
         {
            id: 5,
            veckodag: 'Lördag',
            namn: 'Restfest deluxe',
         },
         {
            id: 6,
            veckodag: 'Söndag',
            namn: 'Korv och makaroner',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.namn)
   }
   render() {
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.day}>
                        {item.veckodag}</Text>
                     <Text style = {styles.text}>
                       {'      '}
                       {item.namn}
                    </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      margin: 6,
      padding: 4,
      flex: 1,
      paddingRight: 75,
      backgroundColor: '#fff',
   },
    text:{
     display: 'flex',
     fontSize: 15,
     color: '#333c',
     marginLeft: 20,
   },
   day:{
      fontWeight: "bold",
   }
})
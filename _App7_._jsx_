import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function click_me() {
  alert('Miaaaw...');
}

export default class App extends Component {
  render() {
    return (
      <View>
        {/* <Text style={style.tulisan}>
          <Text style={style.tulisanTebal}>Halo</Text>,
          <Text style={style.tulisanMiring}> kucing</Text>!
        </Text>
        <Image source={{ uri: 'https://media.tenor.com/9YGa6pkKJ5YAAAAM/muh-cat.gif' }} style={{ width: 400, height: 400 }}></Image>
        <Image source={ require("./img/pngtree-cute-little-orange-cat-cute-kitty-png-image_11459049.png") } style={ style.gambarKucing }></Image>
        <Button title='Click Me' onPress={click_me}></Button>
        <TouchableOpacity onPress={click_me} style={ style.clickMe }><Text style={{ color: '#fff', textAlign: 'center' }}>Click Me</Text></TouchableOpacity> */}
        <View style={style.area}>
          <View style={style.kotakSalmon}></View>
          <View style={style.kotakMerahMuda}></View>
          <View style={style.kotakBiruMuda}></View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  area: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'flex-start'
  },
  kotakSalmon: {
    width: 100, height:100, backgroundColor: 'salmon', marginTop: 10
  },
  kotakMerahMuda: {
    width: 100, height:100, backgroundColor: 'pink', marginTop: 10
  },
  kotakBiruMuda: {
    width: 100, height:100, backgroundColor: 'lightblue', marginTop: 10
  },
  tulisan: {
    fontSize: 50
  },
  tulisanTebal: {
    fontWeight: 'bold'
  },
  tulisanMiring: {
    fontStyle: 'italic'
  },
  gambarKucing: {
    width: 400,
    height: 400,
  },
  clickMe: {
    backgroundColor: 'salmon', 
    padding: 5
  }
})
import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export class App extends Component {
  state = {
    nama: 'Pandu',
    surel: 'pandu@gmail.com',
    detail: { umur: 24, hobi: 'belajar' }
  }

  gantiData = () => {
    this.setState({
      nama: 'Danpu', 
      surel: 'danpu@rocketmail.com',
      detail: { umur: 23, hobi: 'jalan-jalan' }
    })
  }

  render() {
    return (
      <View style={style.wrapper}>
        <Text style={style.tulisan}>Halo, nama saya {this.state.nama}.</Text>
        <Text style={style.tulisan}>{this.state.surel}</Text>
        <Text style={style.tulisan}>Saya berumur {this.state.detail.umur} tahun.</Text>
        <Text style={style.tulisan}>Hobi saya adalah {this.state.detail.hobi}.</Text>
        <Button onPress={() => this.gantiData()} title='Ubah Data' style={{ fontWeight: 'bold' }}></Button>
      </View>
    )
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tulisan: {
    fontSize: 25,
  }
})

export default App
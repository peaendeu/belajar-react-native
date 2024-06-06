import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export class App extends Component {
  state = {
    namaHewan: [
      {id:0, nama: 'Kucing'},
      {id:1, nama: 'Anjing'},
      {id:2, nama: 'Hamster'},
      {id:3, nama: 'Burung'},
    ]
  }

  clickMe = (namaHewan) => {
    alert('Kamu memilih ' + namaHewan + '.')
  }

  render() {
    return (
      <View>
        {
          this.state.namaHewan.map((item, index) => (
            <TouchableOpacity onPress={() => this.clickMe(item.nama)}>
              <Text style={style.textNamaHewan} key={index}>{item.nama}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

const style = StyleSheet.create({
  textNamaHewan: {
    fontSize: 30,
    backgroundColor: 'pink',
    padding: 5,
    margin: 5,
    color: 'white'
  }
})

export default App
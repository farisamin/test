import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Row } from "./Row"
import Icon from 'react-native-vector-icons/FontAwesome';

const CardContent = ({
  data
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.content}>
      {
        data.stats.map( (d, i) => {
          let rowStyle = {...styles.row}
          if(
            data.stats.length === 2 && i === 0 ||
            data.stats.length === 3 && i === 1
          ){
            rowStyle = {
              ...rowStyle,
              ...styles.bordered
            }
          }
          return (
            <View key={d.label} style={{flex: data.stats.length === 3 && i===2 ? 2 : 1}}>
              <Text style={[styles.subTitle, ((data.stats.length === 3 && i===2) || (data.stats.length === 2 && i===1)) ? styles.marTop : null]}>{d.label}</Text>
              <Row test space={'around'} middle style={rowStyle}>
                <Icon name={"newspaper-o"} size={22} color={'red'}/>
                <Text style={styles.value}>{d.value}</Text>
              </Row>
            </View>
          )
        })
      }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1, 
    justifyContent: 'center',
    height: 300
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 12,
    color: "red"
  },
  subTitle:{
    fontSize: 10,
    color: "#aaa",
    marginTop: 10
  },
  value: {
    fontSize: 18,
    color:"#777"
  },
  content: {
    flex: 1
  },
  row: {
    flex: 1,
  },
  bordered: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  marTop: {
    marginTop: 20
  }
})

export { CardContent }
import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const Row = ({
  space,
  middle,
  style,
  children,
  test
}) => {
  let compStyle = style ? style : {}

 
  if(space){
    compStyle['justifyContent'] = `space-${space}`
  }
  if(middle){
    compStyle['alignItems'] = `center`
  }
  compStyle = {...styles.container, ...compStyle}
  if(test)
  {
    console.log("style: ",compStyle)
  }
  


  return (
    <View style={compStyle}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row'
  },
})

export { Row }
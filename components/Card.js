import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const Circle = ({label}) => (
  <View style={styles.circle}>
    <Text style={styles.label}>{label}</Text>
  </View>
)

const Card = ({
  borderRadius,
  label,
  children
}) => {
  return (
    <View style={[styles.container, {borderRadius}]}>
      {children}
      <Circle label={label} />
    </View>
  )
}

Card.defaultProps = {
  borderRadius: 10
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -15, 
    left: -15,
    backgroundColor: "yellow"
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold'
  }
})

export { Card }
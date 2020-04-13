import React  from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import { Card } from "../../components/Card"
import { Row } from "../../components/Row"
import { CardContent } from "../../components/CardContent"
import { data1, data2 } from "../../dummy/data"
import Icon from 'react-native-vector-icons/Entypo';

const DisplayData1 = () => {
  return (     
    <Row space={"around"}>
      {/* Card1 */}
      <Card label={1.1}>
        <Row middle>
          <Text style={[styles.big, styles.red]}>SRC</Text>
          <Text style={[styles.big, styles.red]}>: </Text>
          <Text style={[styles.big, styles.grey]}>
            {data1.data.total} <Icon name="triangle-up" color="green" size={15} />4 vs LW
          </Text>
        </Row>

        <Row>
          <Text style={[styles.big, styles.red, styles.flex3]}>Reg. AYO</Text>
          <Text style={[styles.big, styles.red]}>: </Text>
          <Text style={[styles.big, styles.grey, styles.flex1]}>{data1.data.registered}</Text>
        </Row>

        <Row>
          <Text style={[styles.big, styles.red, styles.flex3]}>UnReg.Ayo</Text>
          <Text style={[styles.big, styles.red]}>: </Text>
          <Text style={[styles.big, styles.grey, styles.flex1]}>{data1.data.unregistered}</Text>
        </Row>          
      </Card>

      {/* Card2 */}
      <Card label={1.2}>
        <Row>
          <Text style={[styles.big, styles.red, styles.flex3]}>SRC</Text>
          <Text style={[styles.big, styles.red]}>: </Text>
          <Text style={[styles.big, styles.grey, styles.flex1]}>{data1.data.total}</Text>
        </Row>

        <Row>
          <Text style={[styles.big, styles.red, styles.flex3]}>Reg. AYO</Text>
          <Text style={[styles.big, styles.red]}>: </Text>
          <Text style={[styles.big, styles.grey, styles.flex1]}>{data1.data.registered}</Text>
        </Row>

        <Row>
          <Text style={[styles.big, styles.red, styles.flex3]}>UnReg.Ayo</Text>
          <Text style={[styles.big, styles.red]}>: </Text>
          <Text style={[styles.big, styles.grey, styles.flex1]}>{data1.data.unregistered}</Text>
        </Row>          
      </Card>

      {/* Card3 */}
      <Card label={1.3}>
        <Row>
          <Text style={[styles.big, styles.red, styles.flex3]}>SRC</Text>
          <Text style={[styles.big, styles.red]}>: </Text>
          <Text style={[styles.big, styles.grey, styles.flex1]}>{data1.data.total}</Text>
        </Row>

        <Row>
          <Text style={[styles.big, styles.red, styles.flex3]}>Reg. AYO</Text>
          <Text style={[styles.big, styles.red]}>: </Text>
          <Text style={[styles.big, styles.grey, styles.flex1]}>{data1.data.registered}</Text>
        </Row>

        <Row>
          <Text style={[styles.big, styles.red, styles.flex3]}>UnReg.Ayo</Text>
          <Text style={[styles.big, styles.red]}>: </Text>
          <Text style={[styles.big, styles.grey, styles.flex1]}>{data1.data.unregistered}</Text>
        </Row>          
      </Card>
    </Row>
  )
}

const DisplayData2 = () => {
  return (     
    <Row space={"around"} style={{marginTop: 20}}>
      {
        data2.data.map( (d, i) => {
          return (
            <Card label={`1.${4+i}`}>
              <CardContent data={d} />
            </Card>
          )
        })
      }
      

    </Row>
  )
}

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DisplayData1 />
      <DisplayData2 />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingVertical: 15
  },
  big: {
    fontSize: 10
  },
  red: {
    color: 'red'
  },
  grey: {
    color: "#aaa"
  },
  flex1: {
    flex: 1
  },
  flex3: {
    flex: 3
  },
})

export default Home 
import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import {TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function Controls() {
  return (
      <SafeAreaView style={styles.container1}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.title}>CONTROLS</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.body}>LIGHTING</Text>
            <View style={styles.space}/>
            <TouchableOpacity
                onPress={() => alert('Toggle Lighting')}
                style={{ backgroundColor: 'blue' }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>ON/OFF</Text>
            </TouchableOpacity>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.body}>LIGHTING - BRIGHTNESS</Text>
            <View style={styles.space}/>
            <Slider
                style={{width: 200, height: 40}}
                minimumValue={75}
                maximumValue={95}
                value={80}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#888"
            />
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.body}>LIGHTING - COLOR TEMPERATURE</Text>
            <View style={styles.space}/>
            <Slider
                style={{width: 200, height: 40}}
                minimumValue={75}
                maximumValue={95}
                value={80}
                minimumTrackTintColor="#FFD700"
                maximumTrackTintColor="#87CEFA"
            />
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.body}>FAN SPEED</Text>
            <View style={styles.space}/>
            <View style={{flexDirection: "row", justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                  onPress={() => alert('Turn Fan Off')}
                  style={{ backgroundColor: 'black' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>OFF</Text>
              </TouchableOpacity>
              <View style={styles.space}/>
              <TouchableOpacity
                  onPress={() => alert('Turn Fan on Low Speed')}
                  style={{ backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>LOW</Text>
              </TouchableOpacity>
              <View style={styles.space}/>
              <TouchableOpacity
                  onPress={() => alert('Turn Fan on Medium Speed')}
                  style={{ backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>MEDIUM</Text>
              </TouchableOpacity>
              <View style={styles.space}/>
              <TouchableOpacity
                  onPress={() => alert('Turn Fan on High Speed')}
                  style={{ backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>HIGH</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.body}>HEATER TEMPERATURE</Text>
            <View style={styles.space}/>
            <TouchableOpacity
                onPress={() => alert('Toggle Heater')}
                style={{ backgroundColor: 'red' }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>ON/OFF</Text>
            </TouchableOpacity>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.body}>UV-PURIFICATION</Text>
            <View style={styles.space}/>
            <TouchableOpacity
                onPress={() => alert('Toggle UVGI System')}
                style={{ backgroundColor: 'blue' }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>ON/OFF</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

/*<EditScreenInfo path="/screens/Home.tsx" />*/

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  space: {
    width: 20,
    height: 20,
  }
});

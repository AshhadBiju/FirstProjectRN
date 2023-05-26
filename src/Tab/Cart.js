/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Cart extends Component {
  constructor() {
    console.log('Constructor Called');
    super();
    this.state = {
      headerText: 'Hi',
    };
  }

  static getDerivedStateFromProps() {
    console.log('GetDerivedStateFromProps called');
    return null;
  }
  updateState() {
    this.setState({headerText: 'Component updated'});
  }

  componentDidMount() {
    console.log('Component Called');
  }

  //shouldComponentUpdate() {
  //  console.log('Should component update called');
  //  return null;
  // }

  componentDidUpdate() {
    console.log('Component did update called');
  }

  componentWillUnmount() {
    console.log('Component unmount is called');
  }

  render() {
    console.log('Render Called');
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.scrollChildView}>
            <View style={styles.headerCard}>
              {/* <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
                {this.state.headerText} 
    </Text> */}
            </View>
            <View style={styles.baselineCard}>
              <View style={styles.textHolder}>
                <Icon name="edit" size={16} color="black" />
                <Text style={{fontSize: 16, marginLeft: 20}}>Mounting</Text>
              </View>
              <View style={styles.textHolder}>
                <Icon name="edit" size={16} color="black" />
                <Text style={{fontSize: 16, marginLeft: 10}}>Updating</Text>
              </View>
              <View style={styles.textHolder}>
                <Icon name="edit" size={16} color="black" />
                <Text style={{fontSize: 16, marginLeft: 10}}>Un-Mounting</Text>
              </View>
              <TouchableHighlight
                style={{
                  width: '80%',
                  height: 55,
                  backgroundColor: 'green',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}
                underlayColor="transparent"
                onPress={() => this.updateState()}>
                <Text
                  style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                  Updating
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
  scrollContainer: {
    width: '100%',
    height: '100%',
  },
  scrollChildView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCard: {
    width: '95%',
    height: 200,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 10,
    elevation: 4,
  },
  baselineCard: {
    width: '95%',
    padding: 15,
    backgroundColor: '#ffffff',
    marginTop: 30,
    elevation: 4,
  },
  textHolder: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
});

/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {createIconSet} from 'react-native-vector-icons';
import axios from 'axios';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      loader: false,
      DATA: [],
    };
  }

  getData() {
    this.setState({loader: true});
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(response => {
        if (response.length > 0) {
          this.setState({DATA: response});
        }
        this.setState({loader: false});
        //console.log('YOUR RESPONSE is:', response);
      })
      .catch(error => {
        this.setState({loader: false});
        console.log('ERROR IS:', error);
      });
  }

  getAxiosData() {
    this.setState({loader: true});
    axios
      .get('https://api.sampleapis.com/coffee/hot')
      .then(response => {
        this.setState({loader: false});
        console.log('AXIOS:RESPONSE', response);
      })
      .catch(error => {
        this.setState({loader: false});
        console.log('AXIOS:ERROR', error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const renderItem = ({item}) => (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemDes}>{item.description}</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={'large'}
          color="blue"
          animating={this.state.loader}
        />
        <Text style={styles.categoryText} onPress={() => this.getAxiosData()}>
          Hi This is Category List
        </Text>
        <FlatList
          style={{width: '95%', marginTop: 10}}
          data={this.state.DATA}
          renderItem={renderItem}
        />
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
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  itemContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 4,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemDes: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#369',
    marginTop: 10,
  },
});

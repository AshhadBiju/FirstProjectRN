/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';

const DataComponent = () => {
  const [fetchPosts, setFetchPosts] = useState([]);
  const [axiosPosts, setAxiosPosts] = useState([]);

  useEffect(() => {
    fetchPostsUsingFetch();
    fetchPostsUsingAxios();
  }, []);

  const fetchPostsUsingFetch = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data = await response.json();
      setFetchPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPostsUsingAxios = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setAxiosPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
        Posts (Fetch):
      </Text>
      <FlatList
        data={fetchPosts.slice(0, 2)}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 10,
        }}>
        Posts (Axios):
      </Text>
      <FlatList
        data={axiosPosts.slice(0, 2)}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DataComponent;

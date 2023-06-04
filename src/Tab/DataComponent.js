/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View>
      {data.map(item => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
};

export default DataComponent;

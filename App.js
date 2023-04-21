import { useState } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import TodoList from './components/TodoList'

const App = () => {
 
  return (
    <View style={styles.container}>
    
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize : 20,
    padding : 20,
    margin:20,
    backgroundColor: '#fff',
  },
});

export default App;


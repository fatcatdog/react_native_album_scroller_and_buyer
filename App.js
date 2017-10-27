// Import a library to help create a Component
import React from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import { View } from 'react-native';

// Create a Component
//Javascript function that returns some jsx

const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );

// Text is undefined
// Import Destructuring is required

// Render it to the device

export default App;

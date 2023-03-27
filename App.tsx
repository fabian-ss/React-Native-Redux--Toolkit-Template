import { View, Text } from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import { store } from './store';
import HomeScreenNotes from './src/Notes/HomeScreenNotes';



const App = () => {
  return (
    <Provider store={store}>
      <HomeScreenNotes/>
    </Provider>
  )
}

export default App
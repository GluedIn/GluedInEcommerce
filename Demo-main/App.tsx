//Global imports
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//File imports
import { RootNavigator } from './src/navigation';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootNavigator />
    </GestureHandlerRootView>
  );
}

export default App;

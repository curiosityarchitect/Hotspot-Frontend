import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation';
import { onBoot } from './src/utils/app.util';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

export default function App() {

  useEffect(() => {
    onBoot();
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
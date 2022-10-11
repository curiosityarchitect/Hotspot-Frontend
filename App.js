import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation';
import { onBoot } from './src/utils/app.util';

export default function App() {

  useEffect(() => {
    onBoot();
  });

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
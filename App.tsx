import React, {useEffect, useState} from 'react';
import {SplashScreen} from './src/screens';
import AuthNavigatiors from './src/Navigatiors/AuthNavigatiors';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigatiors />
        </NavigationContainer>
      )}
      ;
    </>
  );
};

export default App;

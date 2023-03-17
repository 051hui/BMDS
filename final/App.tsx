import React, { useCallback, useState } from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { ToggleThemeProvider } from './screens/ToggleThemeProvider'
import { useColorScheme } from 'react-native'
import MainNavigator from './screens/MainNavigator'
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();
const App = () => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme == "dark" ? DarkTheme : DefaultTheme);
  const toggleTheme = useCallback(() => {
    return setTheme((theme)=>theme.dark? DefaultTheme: DarkTheme);
  }, []);

  return (
    <ToggleThemeProvider toggleTheme={toggleTheme}>
      <NavigationContainer theme={theme}>
        <MainNavigator />
      </NavigationContainer>
    </ToggleThemeProvider>
  )
}

export default App;
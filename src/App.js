import React from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Router from './router';
import {store} from './redux';

const App = () => {

  
const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
    const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </Provider>
    
    );
}


// const App: () => Node = () => {
  //   const isDarkMode = useColorScheme() === 'dark';
  
  //   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
  //     <SafeAreaView style={backgroundStyle}>
  //       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //       <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
  //         <Header />
  //         <View
  //           style={{backgroundColor: isDarkMode ? Colors.black : Colors.white, }}>
  //           <Section title="Step One" content={<Text>Makan</Text>}></Section>
  //         </View>
  //       </ScrollView>
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;

// const Section = ({content, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {content}
//       </Text>
//     </View>
//   );
// };
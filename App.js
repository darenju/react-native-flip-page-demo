import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlipPage, { FlipPagePage } from 'react-native-flip-page';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlipPage loopForever>
          <FlipPagePage>
            <View style={styles.page1}>
              <Text>Page 1</Text>
            </View>
          </FlipPagePage>
          <FlipPagePage>
            <View style={styles.page2}>
              <Text>Page 2</Text>
            </View>
          </FlipPagePage>
        </FlipPage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page1: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page2: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

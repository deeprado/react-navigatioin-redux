import React from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import {onThemeChange} from '../redux/actions/theme';

import TabBarComponent from '../components/TabBarComponent';

class FavoriteScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>FavoriteScreen</Text>
          <TabBarComponent />
          <Button
            title="改变主题色"
            onPress={() => {
              // let {dispatch} = this.props.navigation;
              // dispatch(onThemeChange('red'))
              this.props.onThemeChange('yellow');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onThemeChange: themeColor => dispatch(onThemeChange(themeColor)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);

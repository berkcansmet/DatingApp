import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fonts} from '../../helpers/Config';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import FinderCard from '../../helpers/FinderCard';

class Finder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Header barStyle={'light-content'} backgroundColor={'transparent'}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="account-outline" size={40} />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={require('../../../assets/images/guklogo.png')}
              style={styles.logo}
            />
          </View>
          <View>
            <Icon name="tune" size={40} />
          </View>
        </Header>
        <FinderCard />
        <View />
      </View>
    );
  }
}

export default Finder;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 100,
    width: 100,
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

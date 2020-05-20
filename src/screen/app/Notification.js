import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {Fonts} from '../../helpers/Config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header barStyle={'light-content'} backgroundColor={'transparent'}>
          <View />
          <View>
            <Text style={styles.bannerText}>Notification</Text>
          </View>
        </Header>
        <View style={styles.message}>
          <Image
            source={require('../../../assets/images/profilePhoto2.jpg')}
            style={styles.profilePhoto}
          />
          <View style={styles.messageContent}>
            <Text style={styles.messageName}>Berkcan reviewed you !</Text>
          </View>
          <View style={styles.Icon}>
            <Icon name="flash-outline" size={25} />
          </View>
        </View>
        <View style={styles.message}>
          <Image
            source={require('../../../assets/images/profilePhoto2.jpg')}
            style={styles.profilePhoto}
          />
          <View style={styles.messageContent}>
            <Text style={styles.messageName}>Berkcan reviewed you !</Text>
          </View>
          <View style={styles.Icon1}>
            <Icon name="heart-outline" size={25} />
          </View>
        </View>
      </View>
    );
  }
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerText: {
    fontFamily: Fonts.Bold,
    fontSize: 30,
  },
  profilePhoto: {
    height: 75,
    width: 75,
    borderRadius: 75 / 2,
  },
  message: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#9F9F9F',
  },
  messageContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageContent1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageName: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
  },
  messageDate: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    color: 'black',
  },
  Icon: {
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderColor: '#FCF31B',
    borderRadius: 60 / 2,
    borderWidth: 3,
  },
  Icon1: {
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderColor: '#EA1313',
    borderRadius: 60 / 2,
    borderWidth: 3,
  },
});

import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {Fonts} from '../../helpers/Config';

class Chat extends Component {
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
            <Text style={styles.bannerText}>Message</Text>
          </View>
        </Header>
        <View style={styles.message}>
          <Image
            source={require('../../../assets/images/profilePhoto2.jpg')}
            style={styles.profilePhoto}
          />
          <View style={styles.messageContent}>
            <Text style={styles.messageName}>Berkcan, 21</Text>
            <Text style={styles.messageIn}>Selam, Nasılsın ? </Text>
          </View>
          <View style={styles.messageContent1}>
            <Text style={styles.messageDate}>15 Minutes Ago</Text>
          </View>
        </View>

        <View style={styles.message}>
          <Image
            source={require('../../../assets/images/profilePhoto2.jpg')}
            style={styles.profilePhoto}
          />
          <View style={styles.messageContent}>
            <Text style={styles.messageName}>Berkcan, 21</Text>
            <Text style={styles.messageIn}>Selam, Nasılsın ? </Text>
          </View>
          <View style={styles.messageContent1}>
            <Text style={styles.messageDate}>5 Minutes Ago</Text>
          </View>
        </View>

        <View style={styles.message}>
          <Image
            source={require('../../../assets/images/profilePhoto2.jpg')}
            style={styles.profilePhoto}
          />
          <View style={styles.messageContent}>
            <Text style={styles.messageName}>Berkcan, 21</Text>
            <Text style={styles.messageIn}>Selam, Nasılsın ? </Text>
          </View>
          <View style={styles.messageContent1}>
            <Text style={styles.messageDate}>1 Minutes Ago</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Chat;
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
    marginLeft: -60,
  },

  messageContent1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageName: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
  },
  messageIn: {
    fontFamily: Fonts.Regular,
    fontSize: 13,
    color: '#8B8B8B',
  },
  messageDate: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    color: 'black',
  },
});

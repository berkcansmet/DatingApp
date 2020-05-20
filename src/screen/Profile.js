import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header} from 'react-native-elements';
import {Fonts} from '../helpers/Config';
import ProgressCircle from 'react-native-progress-circle';
import HomeNaigator from './HomeNavigator';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header barStyle={'light-content'} backgroundColor={'transparent'}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack('HomeNavigator')}>
            <Icon name="close" size={35} color="grey" />
          </TouchableOpacity>
          <View>
            <Text style={styles.bannerText}>Berkcan</Text>
          </View>
          <Icon name="cogs" size={35} color="grey" />
        </Header>
        <View style={styles.profile}>
          <ProgressCircle percent={25} radius={125} borderWidth={5} color="red">
            <Image
              source={require('../../assets/images/profilePhoto2.jpg')}
              style={styles.profilePhoto}
            />
          </ProgressCircle>
          <View style={styles.editProfile}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </View>
          <View style={styles.premiumFinder}>
            <Text style={styles.premiumFinderText}>Şimdi Premium'u Keşfet</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('BalanceScreen')}>
            <View style={styles.balance}>
              <View>
                <Text style={styles.balanceText}>Bakiye: 0 Kredi</Text>
                <Text style={styles.balanceAddText}>Hemen Kredi Al</Text>
              </View>
              <View />
              <View style={styles.diamondIcon}>
                <Icon name="plus-circle-multiple-outline" size={25} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DiamondScreen')}>
            <View style={styles.balance}>
              <View>
                <Text style={styles.balanceText}>Bakiye: 0 Elmas</Text>
                <Text style={styles.balanceAddText}>Hemen Elmas Al</Text>
              </View>
              <View />
              <View style={styles.diamondIcon}>
                <Icon name="diamond-stone" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerText: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    height: 250,
    width: 250,
    borderRadius: 250 / 2,
  },
  editProfile: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 150,
    backgroundColor: 'white',
    top: -25,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
  },
  editProfileText: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    color: 'black',
  },
  premiumFinder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0069B1',
    height: 50,
    width: 300,
    borderRadius: 50,
  },
  premiumFinderText: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    color: 'white',
  },
  balance: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    top: 10,
    width: 350,
    borderBottomWidth: 2,
    borderBottomColor: '#9F9F9F',
  },
  balanceText: {
    fontFamily: Fonts.Regular,
    fontSize: 25,
    color: 'black',
  },
  balanceAddText: {
    fontFamily: Fonts.Thin,
    fontSize: 15,
    color: 'black',
  },
  diamondIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

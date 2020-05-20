import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header, Button} from 'react-native-elements';
import {Fonts} from '../helpers/Config';
import {CheckBox} from 'native-base';
class BalanceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: null};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header barStyle={'light-content'} backgroundColor={'transparent'}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack('Profile')}>
            <Icon name="close" size={35} color="grey" />
          </TouchableOpacity>
          <View>
            <Text style={styles.bannerText}>Guk App Kredileri</Text>
          </View>
        </Header>
        <View style={styles.balaceBuyContainer}>
          <View style={styles.balaceBuy}>
            <Text style={styles.balaceBuyText}>500 Kredi</Text>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                onPress={() => this.setState({checked: !this.state.checked})}
                checked={this.state.checked}
                color="green"
                style={styles.checkBox}
              />
              <Text style={styles.balaceBuyText1}>25.00 TL</Text>
            </View>
          </View>
          <View style={styles.balaceBuy}>
            <Text style={styles.balaceBuyText}>1.000 Kredi</Text>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                onPress={() => this.setState({checked: !this.state.checked})}
                checked={this.state.checked}
                color="green"
                style={styles.checkBox}
              />
              <Text style={styles.balaceBuyText1}>50.00 TL</Text>
            </View>
          </View>
          <View style={styles.balaceBuy}>
            <Text style={styles.balaceBuyText}>3.000 Kredi</Text>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                onPress={() => this.setState({checked: !this.state.checked})}
                checked={this.state.checked}
                color="green"
                style={styles.checkBox}
              />
              <View>
                <Text style={styles.balaceBuyText2}>%25 Kar edin*</Text>
                <Text style={styles.balaceBuyText1}>125.00 TL</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buyButton}>
          <Button
            buttonStyle={styles.button}
            title="Google Play ile satın al"
          />
        </View>
      </View>
    );
  }
}

export default BalanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerText: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
  },
  balaceBuyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  balaceBuy: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 25,
    margin: 5,
    width: 400,
    borderWidth: 1,
    borderColor: '#9F9F9F',
  },
  checkBox: {
    borderRadius: 20,
  },
  balaceBuyText: {
    fontFamily: Fonts.Bold,
    color: 'black',
    fontSize: 25,
  },
  balaceBuyText1: {
    fontFamily: Fonts.Bold,
    color: 'black',
    fontSize: 15,
  },
  balaceBuyText2: {
    fontFamily: Fonts.Bold,
    color: 'green',
    fontSize: 15,
  },
  checkBoxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    width: 350,
    height: 50,
    borderRadius: 30,
  },
});

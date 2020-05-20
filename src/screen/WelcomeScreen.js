import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';
import {Fonts} from '../helpers/Config';
class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/welcomeScreenBG.jpg')}
        style={styles.container}>
        <SafeAreaView style={styles.area}>
          <StatusBar barStyle={'light-content'} />
          <View style={styles.content}>
            <View style={styles.header}>
              <Image
                source={require('../../assets/images/guklogo.png')}
                style={styles.logo}
              />
              <Text style={styles.logoText}>Guk</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Button
              onPress={() => this.props.navigation.navigate('HomeNavigator')}
              title="Facebook ile giriş yap"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
            />
            <Button
              title="Cep telefonu ile giriş yap"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
            />
            <Text style={styles.footerText}>
              Facebookta senin adına paylaşım yapmayacağız.
            </Text>
            <Text style={styles.footerText}>
              Hizmet Koşulları ve Gizlilik Politikası
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  area: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 300,
    width: 300,
  },
  logoText: {
    top: -100,
    fontFamily: Fonts.Bold,
    fontSize: 60,
  },
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: 15,
  },
  button: {
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: 'black',
    borderRadius: 35,
  },
  buttonTitle: {
    fontFamily: Fonts.Bold,
    fontSize: 25,
    color: '#D8D8D8',
  },
  footerText: {
    fontFamily: Fonts.Bold,
    fontSize: 10,
    color: '#383838',
    textAlign: 'center',
  },
});

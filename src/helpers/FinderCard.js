import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fonts} from '../helpers/Config';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardStack, {Card} from 'react-native-card-stack-swiper';
class FinderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          title: 'User , 21',
          url:
            'https://images.unsplash.com/photo-1493136289900-28660d718589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          location: '15 Km',
        },
        {
          title: 'User , 21',
          url:
            'https://images.unsplash.com/photo-1493136289900-28660d718589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          location: '15 Km',
        },
        {
          title: 'User , 21',
          url:
            'https://images.unsplash.com/photo-1493136289900-28660d718589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          location: '15 Km',
        },
        {
          title: 'User , 21',
          url:
            'https://images.unsplash.com/photo-1493136289900-28660d718589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          location: '15 Km',
        },
        {
          title: 'User , 21',
          url:
            'https://images.unsplash.com/photo-1493136289900-28660d718589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          location: '15 Km',
        },
      ],
    };
  }

  renderSwiper = () => {
    var data = this.state.carouselItems;
    if (data) {
      return data.map((data, index) => {
        return (
          <Card style={styles.card} key={index}>
            <Image
              style={styles.cardImage}
              source={{
                uri: data.url,
              }}
            />
            <View style={styles.titleContainer}>
              <View style={styles.swiperTitle}>
                <View>
                  <Text style={styles.label}>{data.title}</Text>
                </View>
                <View />
                <View style={styles.location}>
                  <Icon name="map-marker" size={35} color="white" />
                  <Text style={styles.label}>{data.location}</Text>
                </View>
              </View>
            </View>
          </Card>
        );
      });
    }
  };
  render() {
    return (
      <View style={styles.finderCardContainer}>
        <CardStack
          style={styles.content}
          renderNoMoreCards={() => (
            <Text style={styles.endCardTitle}>Nobody Nearby :(</Text>
          )}
          ref={swiper => {
            this.swiper = swiper;
          }}>
          {this.renderSwiper()}
        </CardStack>

        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.dislike]}
              onPress={() => {
                this.swiper.swipeLeft();
              }}>
              <Icon name="thumb-down-outline" color="red" size={40} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.superLike]}
              onPress={() => {
                this.swiper.swipeTop();
              }}>
              <Icon name="star" color="yellow" size={40} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.like]}
              onPress={() => {
                this.swiper.swipeRight();
              }}>
              <Icon name="thumb-up-outline" color="green" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default FinderCard;
const styles = StyleSheet.create({
  finderCardContainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 320,
    height: 470,
    borderRadius: 5,
  },
  label: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Fonts.Bold,
    color: '#ffffff',
  },
  buttonContainer: {
    top: -30,
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  superLike: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgba(226, 230, 10, 0.84)',
    borderRadius: 55,
    marginTop: -15,
  },
  like: {
    width: 75,
    height: 75,
    borderRadius: 75,
    borderWidth: 6,
    borderColor: 'rgba(35, 205, 60, 0.72)',
  },
  dislike: {
    width: 75,
    height: 75,
    borderRadius: 75,
    borderWidth: 6,
    borderColor: 'rgba(205, 52, 35, 0.84)',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
  },
  swiperTitle: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
    height: 60,
    width: 320,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  endCardTitle: {fontFamily: Fonts.Bold, fontSize: 18, color: 'gray'},
  cardImage: {height: 470},
  cardStackContainer: {flex: 1},
});

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as CONST from '../../Utils/Constants';
import styles from './styles';

export default class HomeTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.dummyData = [
      {
        id: 314,
        name: 'BUDWEISER',
        brand: 'BUDWEISER',
        category: 'Hard',
        price: '$23',
        quantity: '1000ml',
        rating: 5,
        url: ''
      },
      {
        id: 315,
        name: 'TSINGTAO',
        brand: 'TSINGTAO',
        category: 'Hard',
        price: '$20',
        quantity: '1000ml',
        rating: 4,
        url: ''
      },
      {
        id: 316,
        name: 'BUD LIGHT',
        brand: 'BUD LIGHT',
        category: 'Hard',
        price: '$18',
        quantity: '1000ml',
        rating: 4,
        url: ''
      },
      {
        id: 317,
        name: 'SKOL',
        brand: 'SKOL',
        category: 'Soft',
        price: '$16',
        quantity: '1000ml',
        rating: 3,
        url: ''
      },
      {
        id: 318,
        name: 'HEINEKEN',
        brand: 'HEINEKEN',
        category: 'Soft',
        price: '$13',
        quantity: '1000ml',
        rating: 3,
        url: ''
      },
      {
        id: 319,
        name: 'CORONA',
        brand: 'CORONA',
        category: 'Light',
        price: '$10',
        quantity: '1000ml',
        rating: 1,
        url: ''
      }
    ];
  }

  renderCell({ item }) {
    console.log('this.props.allBrands', this.props.allBrands);
    const { rating } = item;
    const overallRating = [1, 2, 3, 4, 5];
    return (
      <TouchableOpacity activeOpacity={0.5} style={styles.cellContainer}>
        <Image style={styles.productImage} source={CONST.BOTTLE_IMAGE} />
        <View style={styles.productDetailContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.productName}>St Ambroise Taster Pack</Text>
            <TouchableOpacity style={styles.dotIcon}>
              <Image source={CONST.TRIPLE_DOT} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              justifyContent: 'space-between'
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              {overallRating.map((index) => {
                return (
                  <View style={{ marginRight: 5 }}>
                    <FontAwesome
                      name="star"
                      color={
                        index <= rating
                          ? CONST.PRIMARY_COLOR
                          : CONST.BORDER_COLOR_GREY_LIGHT
                      }
                      size={20}
                      key={index}
                    />
                  </View>
                );
              })}
            </View>
          </View>
          <Text style={styles.productPrice}>$26.30</Text>
          <Text style={styles.productDescription}>
            The taste pack consists of 3 each of: St. Ambroise Pale Ale, St.
            Ambroise Apricot Wheat Ale, St. Ambroise Oatmeal Stout and St.
            Ambroise India Pale Ale (4.5% to 6.2% alc.).
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer]}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Image style={styles.notiIcon} source={CONST.NOTIFICATION_ICON} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartIcon}>
            <Image style={styles.cartsIcon} source={CONST.CART_ICON} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            underlineColorAndroid="transparent"
            returnKeyType="next"
            placeholder="Search product"
            value={this.state.searchText}
            autoCapitalize="none"
            onChangeText={(searchText) => {
              this.setState({ searchText });
            }}
            keyboardType="email-address"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Image source={CONST.SEARCH_ICON} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterIcon}>
            <Image source={CONST.FILTER_ICON} />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.dummyData}
            renderItem={(item) => this.renderCell(item)}
            extraData={this.state}
          />
          <Image style={styles.loadMore} source={CONST.LOAD_MORE_ICON} />
        </View>
      </View>
    );
  }
}

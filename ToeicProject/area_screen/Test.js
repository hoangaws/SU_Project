import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import TestTabBar from './TestTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class UserDetail extends Component {

  static navigationOptions = {
    title: 'Test 123',
    headerTintColor: 'blue',
    headerRight: <Button title="Info" buttonStyle={{ backgroundColor: 'blue', borderRadius: 10 }} />,
  };

  render() {
    const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;

    return (
      <ScrollableTabView initialPage={2} renderTabBar={() => <TestTabBar />}
        tabBarPosition="bottom" locked={true}
      >

        <TouchableOpacity tabLabel="md-close" >
          <View>
            <Text>Vocabulary 123456</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity tabLabel="md-arrow-dropleft-circle">
          <View>
            <Text>Vocabulary </Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity tabLabel="md-pause">
          <View>
            <Text  style={{ color: "black", fontSize: 30}}>Test 1</Text>
            <Text  style={{ color: "black", fontSize: 30}}>Test dsdsfddddddddddddddddddddddddddddddddddddddddd</Text>
             <TouchableOpacity >
              <Text style={{ color: "yellow", fontSize: 30}}>Check</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={{ color: "blue", fontSize: 30}}>Show</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={{ color: "red", fontSize: 30}}>Go</Text>
            </TouchableOpacity>
            <Text  style={{ color: "black", fontSize: 30}}>Test 3</Text>
            <Text  style={{ color: "black", fontSize: 30}}>Test 4</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity tabLabel="md-arrow-dropright-circle">
          <View>
            <Text>Vocabulary </Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity tabLabel="md-paper-plane">
          <View>
            <Text>Vocabulary </Text>

          </View>
        </TouchableOpacity>

      </ScrollableTabView>
    );
  }
}

export default UserDetail;


{/*<ScrollView>
          <TouchableOpacity onPress={() => navigate('ManHinh_Detail', { thamso: 'Huy Hoang 888' })} style={{ backgroundColor: 'green' }}>
            <Text style={{ color: "#fff", fontSize: 20, padding: 10 }}>Go to Detail</Text>
          </TouchableOpacity>
          <Tile
            imageSrc={{ uri: picture.large }}
            featured
            title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
            caption={email}
          />

          <List>
            <ListItem
              title="Email"
              rightTitle={email}
              hideChevron
            />
            <ListItem
              title="Phone"
              rightTitle={phone}
              hideChevron
            />
          </List>

          <List>
            <ListItem
              title="Username"
              rightTitle={login.username}
              hideChevron
            />
          </List>

          <List>
            <ListItem
              title="Birthday"
              rightTitle={dob}
              hideChevron
            />
            <ListItem
              title="City"
              rightTitle={location.city}
              hideChevron
            />
          </List>
        </ScrollView>*/}
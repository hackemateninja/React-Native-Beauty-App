import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import Card from "./components/Card";
import Logo from './components/Logo';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component{
  render(){
      return (
          <Container>
              <SafeAreaView>
                  <ScrollView>
                      <TitleBar>
                          <Avatar source={require('./assets/avatar.jpg')}/>
                          <Title>Welcome back, </Title>
                          <Name>Meng</Name>
                          <Ionicons
                              name="ios-notifications"
                              size={32}
                              color="#4775f2"
                              style={{position:"absolute", right:20, top:5}}
                          />
                      </TitleBar>
                      <ScrollView horizontal={true} style={{flexDirection:"row", padding:20}} showsHorizontalScrollIndicator={false}>
                          <Logo image={require('./assets/logo-framerx.png')} text="Framer X"/>
                          <Logo image={require('./assets/logo-figma.png')} text="Figma"/>
                          <Logo image={require('./assets/logo-sketch.png')} text="sketch"/>
                      </ScrollView>
                      <Subtitle>Continue Learning</Subtitle>
                      <ScrollView horizontal={true} style={{paddingBottom: 30}} showsHorizontalScrollIndicator={false}>
                          <Card
                              title="Styled Components"
                              image={require('./assets/background1.jpg')}
                              logo={require('./assets/logo-react.png')}
                              caption="React Native"
                              subtitle="5 of 12 sections"
                          />
                          <Card
                              title="Styled Components 2"
                              image={require('./assets/background2.jpg')}
                              logo={require('./assets/logo-react.png')}
                              caption="React Native"
                              subtitle="5 of 12 sections"
                          />
                      </ScrollView>
                  </ScrollView>
              </SafeAreaView>
          </Container>
      );
  }
}
const Container = styled.View`
    flex: 1;
    background-color: #f0f3f5;
`;

const TitleBar = styled.View`
    width: 100%;
    margin-top: 50px;
    padding-left: 80px;
`;

const Avatar = styled.Image`
    width: 44px;
    height: 44px;
    background: black;
    border-radius: 22px;
    margin-left: 20px;
    position:absolute;
    top: 4px;
    left: 0;
`;

const Title = styled.Text`
    font-size: 16px;
    color: #b8bece;
    font-weight:500;
`;

const Name = styled.Text`
    font-size: 20px;
    color: #3c4560;
    font-weight:bold;
`;

const Subtitle = styled.Text`
    color: #b8bece;
    font-weight: 600;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 10px;
    text-transform: uppercase;
`;

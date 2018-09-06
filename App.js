import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {homeStyle} from './style/home';
import {globalStyle} from "./style/global";
import AppHeader from "./components/AppHeader";
import ImgBtn from "./components/ImgBtn.js"


export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ScrollView contentContainerStyle={globalStyle.container}>
                <AppHeader title='CAR CRASH SOUNDBOX'/>
                <ImgBtn soundName={(require('./sounds/crash1.wav'))} path={require('./images/crash1.jpg')} name={'CRASH DE OUF'}/>
                <ImgBtn soundName={(require('./sounds/crash2.mp3'))} path={require('./images/crash2.jpg')} name={'BOUM VOITURE'}/>
                <ImgBtn path={require('./images/crash3.jpg')} name={'TROP FORT'}/>
                <ImgBtn path={require('./images/crash4.jpg')} name={'MEGA CRASH'}/>
                <ImgBtn path={require('./images/crash5.jpg')} name={'EN MODE POSE'}/>
                <ImgBtn path={require('./images/crash6.jpg')} name={'ET BIM'}/>
                <ImgBtn path={require('./images/crash7.jpg')} name={'AIE AIE AIE'}/>
                <ImgBtn path={require('./images/crash8.jpg')} name={'L\'ACCIDENT'}/>
                <ImgBtn path={require('./images/crash9.jpg')} name={'LE DECES'}/>
                <ImgBtn path={require('./images/crash10.jpg')} name={'ATTENTION'}/>
                <ImgBtn path={require('./images/crash11.jpg')} name={'CA FAIT MAL'}/>
                <ImgBtn path={require('./images/crash12.jpg')} name={'AH OUAIS'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'BRUIT FOU !'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'AH CARREMENT'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'pas terrible'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'TROP BIEN'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'IL A MAL'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'VIOLENT'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'SUPER FORT'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'VIOLENT 2'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'HIHIHI BOUM'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'MAIS GENRE'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'C FINI'}/>
            </ScrollView>
        );
    }
}

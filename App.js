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
                <ImgBtn path={require('./images/crash1.jpg')} name={'CRASH DE OUF'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'BOUM LA CAISSE'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'TROP FORT'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'MEGA ACCIDENT'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'EN MODE POSE'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'ET BIM'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'AIE AIE AIE'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'L\'ACCIDENT'}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
                <ImgBtn path={require('./images/crash1.jpg')}/>
            </ScrollView>
        );
    }
}

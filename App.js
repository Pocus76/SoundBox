import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {homeStyle} from './style/home';
import {globalStyle} from "./style/global";
import AppHeader from "./components/AppHeader";
import ImgBtn from "./components/ImgBtn.js"


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            sound: new Expo.Audio.Sound(),
        }
    }

    async componentWillMount(audioFile) {
        await this.state.sound.loadAsync(audioFile);
    }

    playCrashSound = async(val) => {
        try {
            await this.state.sound.playAsync(); //This works, but just only once!
        }
        catch (error) {
            //
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={globalStyle.container}>
                <AppHeader title='CAR CRASH SOUNDBOX'/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'CRASH DE OUF'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'BOUM VOITURE'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'TROP FORT'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'MEGA CRASH'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'EN MODE POSE'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'ET BIM'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'AIE AIE AIE'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'L\'ACCIDENT'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'LE DECES'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'ATTENTION'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'CA FAIT MAL'}/>
                <ImgBtn path={require('./images/crash1.jpg')} name={'AH OUAIS'}/>
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

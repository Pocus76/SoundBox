import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {homeStyle} from "../style/home";
import {fontsStyle} from "../style/fonts";

export default class ImgBtn extends React.Component {
    constructor() {
        super();
        this.audioPlayer = new Expo.Audio.Sound();
    }

    render() {

        return (
            <TouchableOpacity onPress={() => {
                try {
                    this.audioPlayer.loadAsync(require('../sounds/crash1.wav'));
                    this.audioPlayer.playAsync();
                } catch (error) {
                    console.log(error);
                }  }} style={homeStyle.imgBtnContainer}>
                <Image source={this.props.path} style={homeStyle.imgBtn} />
                <Text style={homeStyle.txtBtn}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}
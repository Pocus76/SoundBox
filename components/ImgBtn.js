import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {homeStyle} from "../style/home";
import {fontsStyle} from "../style/fonts";

export default class ImgBtn extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <TouchableOpacity onPress={() => { }} style={homeStyle.imgBtnContainer}>
                <Image source={this.props.path} style={homeStyle.imgBtn} />
                <Text style={homeStyle.txtBtn}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}
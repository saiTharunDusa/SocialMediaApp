import React from "react";
import {View, Image, Text} from "react-native";
import Style from "./Style";

import PropTypes from "prop-types";

const UserProfileImage = (props) => {
    return(
        <View >
            <Image source={props.profileImage} style={[Style.ProfileImageContainer, {borderRadius : props.imageDimensions, width : props.imageDimensions, height : props.imageDimensions}]}  />
        </View>
       
    )
}

UserProfileImage.PropTypes = {
    profileImage : PropTypes.any.isRequired,
    imageDimensions : PropTypes.number.isRequired
}

export default UserProfileImage;
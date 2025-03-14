import React from "react";
import {View, Text} from "react-native"
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import Style from "./Style";
const UserStory = (props) => {
    return(
        <View style={Style.UserStoryStyle}>
            <UserProfileImage profileImage = {props.profileImage} imageDimensions = {props.imageDimensions}  />
            <Text style={Style.firstName}>{props.firstName}</Text>
        </View>
    )
}

export default UserStory
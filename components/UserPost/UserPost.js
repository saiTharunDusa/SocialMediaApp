import React from "react";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import {View, Text, Image} from "react-native";
import Style from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark, faEllipsisH, faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";
const UserPost = (props) => {
    return(
        <View>
        <View style={Style.UserPostContainer}>
            <UserProfileImage profileImage = {props.profileImage} imageDimensions = {props.imageDimensions} />
            <View style= {Style.UserPostBar}>
                <View>
                <Text>
                    {props.firstName} {props.lastName}
                </Text>
                {props.location && <Text>
                        {props.location}
                </Text>}
                </View>
                <FontAwesomeIcon icon={faEllipsisH} style={Style.FontIcon}/>                
            </View>
        </View>
        <View >
            <Image source = {props.profileImage} style={{
                width: 345,
                height :300,
                marginLeft : 25,
                marginTop : 10,
                borderRadius : 20,   
            }}/>
        </View>
        <View style={{
            flexDirection : 'row'
        }}>
            <View style={
                {
                    flexDirection : 'row',
                    marginTop : 9,
                    marginLeft : 35,
                }
            }>
                <FontAwesomeIcon icon={faHeart} color="#79869F"/>
                <Text style={{
                    marginLeft : 3,
                }}>{props.likes}</Text>
            </View>
            <View style = {
                {
                    flexDirection : 'row',
                    marginTop : 9,
                    marginLeft : 30,
                }
            }>
                <FontAwesomeIcon icon={faMessage} color='#79869F'/>
                <Text style={{
                    marginLeft : 3,
                }}>{props.comments}</Text>
            </View>
            <View style = {
                {
                    flexDirection : 'row',
                    marginTop : 9,
                    marginLeft : 30,
                }
            }>
                <FontAwesomeIcon icon={faBookmark} color='#79869F'/>
                <Text style={{
                    marginLeft : 3,
                }}>{props.comments}</Text>
            </View>
        </View>
        </View>
    )
}

export default UserPost;
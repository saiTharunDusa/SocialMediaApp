
import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, FlatList } from 'react-native';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    }, //0
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    }, //4
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nino',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nana',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    }, //8
  ];

  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
	  profileImage: require('./assets/images/default_post.png'),
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
	  profileImage: require('./assets/images/default_post.png'),
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
	  profileImage: require('./assets/images/default_post.png'),
      location: 'Worcester, MA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
	  profileImage: require('./assets/images/default_post.png'),
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      bookmarks: 6,
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
	  profileImage: require('./assets/images/default_post.png'),
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      id: 5,
    },
  ];


  const userStoriesPageSize = 4;
  const [isUserStoriesLoading, setIsUserStoriesLoading] = useState(false);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);

  const userPostsPageSize = 4;
  const [isUserPostsLoading, setIsUserPostsLoading] = useState(false);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);

  const pagination = (database, currentPage, pageSize) => {
	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = (startIndex + pageSize);
	if(startIndex >= database.length)
		return [];
	return database.slice(startIndex, endIndex);
  }	



  useEffect(()=>{
	setIsUserStoriesLoading(true);
	const getInitialData = pagination(userStories, 1, userStoriesPageSize);
	setUserStoriesRenderedData(getInitialData);
	setIsUserStoriesLoading(false);

	setIsUserPostsLoading(true);
	const getInitialPostsData = pagination(userPosts, 1, userPostsPageSize);
	setUserPostsRenderedData(getInitialPostsData);
	setIsUserPostsLoading(false);
  },[])

  return(
    <SafeAreaView>
     
	  <View>
		<FlatList
		ListHeaderComponent={<>
			 <View style={globalStyle.header}>
        <Title title = {"Let's Explore"}/>
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color='#898DAE' />
        </TouchableOpacity>
        <View style = {globalStyle.messageNumberContainer}>
          <Text style={globalStyle.messageNumber}>2</Text>
        </View>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList 
	      onEndReachedThreshold={0.5}
		  onEndReached={()=>{
			if(isUserStoriesLoading)
			{
				return [];
			}
			setIsUserStoriesLoading(true);
			const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize);
			if(contentToAppend.length > 0)
			{
				setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
				setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
			}
			setIsUserStoriesLoading(false);
		  }}
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data={userStoriesRenderedData}
          renderItem={({item}) => (
            <UserStory key = {'userStory' + item.id} firstName = {item.firstName} profileImage={item.profileImage} imageDimensions = {65} />
          )}
        />
      </View>
		</>}
		onEndReachedThreshold={0.5}
		onEndReached={() => {
			if(isUserPostsLoading)
			{
				return [];
			}
			setIsUserPostsLoading(true);
			const contentToAppend = pagination(userPosts, userPostsCurrentPage + 1, userPostsPageSize);
			if(contentToAppend.length > 0)
			{
				setUserPostsCurrentPage(userPostsCurrentPage + 1);
				setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
			}
			setIsUserPostsLoading(false);
		}}
		showsVerticalScrollIndicator={false}
		data = {userPostsRenderedData}
		renderItem={({item})=>(
			<UserPost  
				key = {'userStory' + item.id}
				firstName = {item.firstName}
				lastName = {item.lastName}
				profileImage = {item.profileImage}
				imageDimensions = {48}
				location = {item.location}
				likes = {item.likes}
				comments = {item.comments}
				bookmarks = {item.bookmarks}
			/>
		)}
		/>
	  </View>
    </SafeAreaView>
  )
}

export default App;
import { 
    FlatList, 
    StyleSheet, 
    Text, 
    View,  
    Image
} from 'react-native';
import React from 'react';

const RESPONSE  = "{\"page\":1,\"per_page\":6,\"total\":12,\"total_pages\":2,\"data\":[{\"id\":1,\"email\":\"george.bluth@reqres.in\",\"first_name\":\"George\",\"last_name\":\"Bluth\",\"avatar\":\"https://reqres.in/img/faces/1-image.jpg\"},{\"id\":2,\"email\":\"janet.weaver@reqres.in\",\"first_name\":\"Janet\",\"last_name\":\"Weaver\",\"avatar\":\"https://reqres.in/img/faces/2-image.jpg\"},{\"id\":3,\"email\":\"emma.wong@reqres.in\",\"first_name\":\"Emma\",\"last_name\":\"Wong\",\"avatar\":\"https://reqres.in/img/faces/3-image.jpg\"},{\"id\":4,\"email\":\"eve.holt@reqres.in\",\"first_name\":\"Eve\",\"last_name\":\"Holt\",\"avatar\":\"https://reqres.in/img/faces/4-image.jpg\"},{\"id\":5,\"email\":\"charles.morris@reqres.in\",\"first_name\":\"Charles\",\"last_name\":\"Morris\",\"avatar\":\"https://reqres.in/img/faces/5-image.jpg\"},{\"id\":6,\"email\":\"tracey.ramos@reqres.in\",\"first_name\":\"Tracey\",\"last_name\":\"Ramos\",\"avatar\":\"https://reqres.in/img/faces/6-image.jpg\"}],\"support\":{\"url\":\"https://reqres.in/#support-heading\",\"text\":\"To keep ReqRes free, contributions towards server costs are appreciated!\"}}";

const styles = StyleSheet.create({

    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    containerTip: {
        fontSize: 30,
        marginTop: 50,
    },

    gridContainer: {},

    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    userHeader: {
      width: 58,
      height: 58,
      borderRadius: 360,
    },

    avatarBorder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 66,
        borderRadius: 360,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'blue',
    },

    username: {
        fontSize: 15,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
  });

const renderItem = ({item}) => {
    return (
        <View>
            <View style={styles.avatarBorder}>
                <Image 
                    style={styles.userHeader}
                    source={{
                        uri: item.avatar,
                    }}/>
            </View>
            <Text style={styles.username}>{item.first_name}</Text>
        </View>
    )
}

const Follow = () => {

    const response = JSON.parse(RESPONSE);

    return (
        <View style={styles.contentContainer}>
            <FlatList 
                style={styles.gridContainer}
                data={response.data}
                renderItem={renderItem}
                numColumns={4}
            />

            <Text style={styles.containerTip}>
                仿二楼、RN页
            </Text>
        </View>
    );
};

export default Follow;

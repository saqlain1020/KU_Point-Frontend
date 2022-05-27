import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Animated,
    TextInput

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import BusList from '../src/components/busList';
import Ionicon from '@expo/vector-icons/Feather';


const searchSchedule = ({ navigation }) => {

    // const timingAlert = () =>
    // Alert.alert('Alert Title', 'My Alert Msg', [
    //   {
    //     text: 'Cancel',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel',
    //   },
    //   { text: 'OK', onPress: () => console.log('OK Pressed') },
    // ]);




    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Image

                    source={require('../assets/bus.png')}
                    style={styles.logo}
                    resizeMode="stretch"

                />
            </View>

            <View style={styles.footer}>
                <Text style={styles.sectionTitle}>
                    Select Your Bus
                </Text>
                <View style={styles.item}>

                    <TouchableOpacity style={styles.touchBox} onPress={() => { navigation.navigate("busSchedule", {
                  busId:"1",
                }) }}>

                        <Ionicon
                            name="map-pin"
                            color="#009387"
                            size={20}
                        />
                        <Text style={styles.touchText} ><BusList Text='Steel Town' /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchBox}  onPress={() => { navigation.navigate("busSchedule", {
                  busId:"2",
                }) }}>
                        <Ionicon
                            name="map-pin"
                            color="#009387"
                            size={20}
                        />
                        <Text style={styles.touchText} ><BusList Text='Malir' /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchBox} >
                        <Ionicon
                            name="map-pin"
                            color="#009387"
                            size={20}
                        />
                        <Text style={styles.touchText} ><BusList Text='Defence' /> </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchBox}>
                        <Ionicon
                            name="map-pin"
                            color="#009387"
                            size={20}
                        />
                        <Text style={styles.touchText} ><BusList Text='Nazimabad' /> </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchBox}>
                        <Ionicon
                            name="map-pin"
                            color="#009387"
                            size={20}
                        />
                        <Text style={styles.touchText} ><BusList Text='Liyari' /> </Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.footerImage}>
                    <Image

                        source={require('../assets/footerImages.png')}
                        style={styles.footerImg}
                        resizeMode="stretch"

                    />
                </View>


            </View>
        </View>
    )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',

    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    footer: {
        flex: 4,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: "10%",

        alignItems: 'center',
    },
    text_footer: {
        marginTop: 10,
        color: '#05375a',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: "RobotoCondensed_400Regular",

    },
    logo: {
        width: 150,
        height: 100,

    },
    logos: {
        width: 130,
        height: 130,
    },
    footerImage: {

        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    footerImg: {
        width: 240,
        height: 190,
    },
    title: {
        color: '#05375a',
        fontSize: 20,
        fontWeight: '300',

    },
    text: {
        color: 'grey',
        marginTop: 5,
        paddingBottom: 20,
    },

    taskWrapper: {
        paddingTop: 24,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    item: {
        width: 300,
        marginTop: "3%",
    },
    touchBox: {
        margin: "2%",
        padding: "5%",
        borderBottomColor: "#009387",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomWidth: 1,
        width: "100%",
        backgroundColor: "#fff",
        elevation: 7,
        flexDirection: "row",
        height:50,

    },
    touchText:
    {

    },
    Btn_text: {
        fontSize: 20,
        fontWeight: '300',
    }



});


export default searchSchedule
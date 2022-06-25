import * as React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput, ScrollView
} from "react-native";

export default function App() {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.segment}>
                        <Image
                            style={styles.icon}
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/295/295128.png"
                            }}
                        />
                    </View>
                    <View style={styles.segment}>
                        <Text style={styles.title}>Đăng nhập</Text>
                    </View>
                    <View style={styles.segment}>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Email"
                            />
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Mật khẩu"
                            />
                        </View>
                    </View>
                </View>
                {/* the footer*/}
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems   : 'center',
                    paddingTop   : 15
                }}>
                    <View style={{
                        flex           : 1,
                        height         : 1,
                        backgroundColor: 'black'
                    }}/>
                    <View>
                        <Text style={{
                            width    : 50,
                            textAlign: 'center'
                        }}>hoặc</Text>
                    </View>
                    <View style={{
                        flex           : 1,
                        height         : 1,
                        backgroundColor: 'black'
                    }}/>
                </View>
                <View style={styles.social}>
                    <TouchableOpacity>
                        <Image
                            style={styles.icon}
                            source={{
                                uri: "https://icon-library.com/images/facebook-png-icon/facebook-png-icon-12.jpg"
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.icon}
                            source={{
                                uri: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex           : 1,
        flexDirection  : "column",
        justifyContent : "center",
        backgroundColor: "white"
    },
    header    : {
        padding        : 10,
        backgroundColor: "blue"
    },
    headerText: {
        fontSize: 24,
        color   : "white",
    },
    body      : {
        flexDirection  : "column",
        justifyContent : "space-between",
        alignItems     : "stretch",
        backgroundColor: "white",
        paddingTop     : 30,
        padding        : 20
    },
    segment   : {
        paddingTop    : 20,
        flexDirection : "column",
        justifyContent: "space-between",
        alignItems    : "stretch"
    },
    icon      : {
        height: 60,
        width : 60
    },

    title             : {
        color   : "#3d3d3d",
        fontSize: 30,
    },
    description       : {
        color   : "#3d3d3d",
        fontSize: 18,
    },
    textInputContainer: {
        borderWidth : 1,
        margin      : 10,
        borderRadius: 10
    },
    textInput         : {
        color   : "#3d3d3d",
        fontSize: 18,
        padding : 10,
    },
    footer            : {
        flexDirection : "column",
        justifyContent: "center",
        alignItems    : "center"
    },
    button            : {
        width          : 350,
        padding        : 15,
        backgroundColor: "blue",
        flexDirection  : "column",
        justifyContent : "center",
        alignItems     : "center",
        elevation      : 1,
        borderRadius   : 10
    },
    buttonText        : {
        fontSize: 18,
        color   : "white",
    },
    social          : {
        flexDirection : "row",
        justifyContent: "center",
        alignItems    : "center"
    }
});

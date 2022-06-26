import * as React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput, ScrollView, ImageBackground
} from "react-native";

export default function App() {

    return (
        <>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImage}
                    source={{
                        uri: "https://i.pinimg.com/originals/ec/2a/96/ec2a96261ae363cdf3cd43be8697d146.png"
                    }}
                >
                    <View style={styles.body}>

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
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.buttonRegister}>
                            <Text style={styles.buttonText}>Đăng Ký</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container      : {
        flex: 1,
    },
    header         : {
        padding        : 10,
        backgroundColor: "blue"
    },
    headerText     : {
        fontSize: 24,
    },
    backgroundImage: {
        flex      : 1,
        resizeMode: 'cover',
    },
    body           : {
        flexDirection : "column",
        justifyContent: "space-between",
        alignItems    : "stretch",
        paddingTop    : 30,
        padding       : 20,
    },
    segment        : {
        paddingTop    : 20,
        flexDirection : "column",
        justifyContent: "space-between",
        alignItems    : "stretch"
    },
    icon           : {
        height        : 70,
        width         : 70,
        flexDirection : "column",
        justifyContent: "center",
        alignItems    : "center",
    },

    title             : {
        color   : "#000000",
        fontSize: 30,
    },
    description       : {
        color   : "#000000",
        fontSize: 18,
    },
    textInputContainer: {
        borderWidth : 1,
        margin      : 10,
        borderRadius: 10
    },
    textInput         : {
        color   : "#000000",
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
    social            : {
        flexDirection : "row",
        justifyContent: "center",
        alignItems    : "center"
    },
    buttonRegister    : {
        flexDirection  : "row",
        justifyContent : "center",
        alignItems     : "center",
        width          : 350,
        marginTop      : 80,
        padding        : 15,
        backgroundColor: "black",
        elevation      : 1,
        borderRadius   : 10
    }
});

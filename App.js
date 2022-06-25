import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

const logo = {
    uri   : 'https://reactnative.dev/img/tiny_logo.png',
    width : 64,
    height: 64
};

const image = [
    {
        id   : 1,
        title: 'Learn Android React Native - Khai Dev'
    },
    {
        id   : 1,
        title: 'Learn Android React Native - Khai Dev'
    },
    {
        id   : 1,
        title: 'Learn Android React Native - Khai Dev'
    },
    {
        id   : 1,
        title: 'Learn Android React Native - Khai Dev'
    },
    {
        id   : 1,
        title: 'Learn Android React Native - Khai Dev'
    },
    {
        id   : 1,
        title: 'Lear Android React Native - Khai Dev'
    },
    {
        id   : 1,
        title: 'Learn Android React Native - Khai Dev'
    },
    {
        id   : 1,
        title: 'Learn Android React Native - Khai Dev'
    },
    {
        id   : 1,
        title: 'Learn Android React Native - Khai Dev'
    },
    {
        id   : 1,
        title: 'Learn Android React Native - Khai Dev'
    }
]

export default function App() {

    const [name, setName]   = useState('');
    const [email, setEmail] = useState('');

    return (
        <ScrollView>
            <View style={styles.container}>
                {image.map((img, index) => {
                    return (
                        <View key={index}>
                            <Text>{img.title}</Text>
                            <Image source={logo} style={styles.text_center}/>
                        </View>
                    )
                })}

                <View>
                    <Text>Some more text</Text>
                    <Image
                        source={{
                            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                        }}
                        style={{
                            width : 200,
                            height: 200
                        }}
                    />
                </View>

                <TextInput
                    style={{
                        width      : 350,
                        height     : 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding    : 5,
                        margin     : 5,
                    }}
                    value={name}
                    onChangeText={(textName) => setName(textName)}
                    placeholder="Input name?"
                />

                <TextInput
                    style={{
                        width      : 350,
                        height     : 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding    : 5,
                        margin     : 5
                    }}
                    value={email}
                    onChangeText={(textEmail) => setEmail(textEmail)}
                    placeholder="Input email?"
                />
                <Button
                    onPress={() => {
                        alert(name + ' ' + email);
                    }}
                    color="#841584"
                    title="Press Me"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container  : {
        flex           : 1,
        backgroundColor: '#fff',
        alignItems     : 'center',
        justifyContent : 'center',
    },
    text_center: {
        alignItems: 'center',
    }
});

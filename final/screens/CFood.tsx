import React from "react"
import { StyleSheet, TouchableOpacity, ScrollView, Image, Linking, useWindowDimensions } from "react-native"
import Emoji from "react-native-emoji";
import { View, Text } from "../theme"
import { Colors } from "react-native-paper";
import { TabView, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const FirstRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/xkxqTaDt')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/thkf.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>탕화쿵푸 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>마라탕 마라향궈 마라반 꿔바로우</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.blue500 }}>정문으로부터 1분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5rsMEe7t')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/jung.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>정</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>매운맛탕수육 고추간짜장 탕수육 깐풍기</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 3분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/xJNaZNKl')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/srf.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>신룽푸마라탕</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>마라탕 마라샹궈 꿔바로우</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 3분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5eGwIB8g')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/hjj.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>홍짜장</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.3</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>홍짜장 홍짬뽕 탕수육 군만두</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 3분</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
);

const SecondRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/FOvhdmhM')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/xiaochan.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>샤오촨</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>마라탕 마라샹궈 마파두부 궈바러우</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.green500 }}>정문으로부터 5분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/FxLgbgrj')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/hongkong.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>홍콩반점0410</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>짜장면 짬뽕 탕수육 군만두</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 6분</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
);

const ThirdRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/5VeAm87D')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/kyungsung.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>경성양꼬치</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>양꼬치 계란토마토 마파두부</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.orange500 }}>정문으로부터 8분</Text></View>
        </TouchableOpacity>
    </ScrollView>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
});

export default function CFood() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: '3분 이내' },
        { key: 'second', title: '4~6분' },
        { key: 'third', title: '7~10분' }
    ]);
    return (

        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />

    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    star: {
        fontSize: 17,
        marginLeft: 'auto'
    },
    card: {
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 40,
        flexDirection: "column",
        height: 300,
        borderColor: "#d3d5e0",
        borderRadius: 10,
        borderWidth: 1,
        padding: 15
    },
    image: {
        width: '100%',
        height: 170
    },
    imageView: {
        padding: 15
    },
    textView: {
        flexDirection: "row", alignItems: 'center'
    }
})
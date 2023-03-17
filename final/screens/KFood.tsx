import React from "react"
import { StyleSheet, TouchableOpacity, ScrollView, Image, Linking, useWindowDimensions } from "react-native"
import Emoji from "react-native-emoji";
import { View, Text } from "../theme"
import { Colors } from "react-native-paper";
import { TabView, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const FirstRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/5MUQCYh4')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/yookssam.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>육쌈냉면</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.1</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>물냉면+숯불고기 비빔냉면+숯불고기</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 3분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/G4yoZ3LE')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/hama.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>하마 가정식백반</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.2</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>함박백반 생선백반 마파두부백반</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.blue500 }}>정문으로부터 3분</Text></View>
        </TouchableOpacity>
    </ScrollView>
);

const SecondRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/GHMjPe3K')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/ssoban.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>숙대소반</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>쫄순 치즈알밥 돈가스</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.green800 }}>정문으로부터 4분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5QMWH6xL')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/ssaam.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>서울쌈냉면</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>물냉면+고기 비빔냉면+고기 왕만두</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.green800 }}>정문으로부터 4분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5PS22dk1')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/hongg.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>홍곱창 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>데리야끼막창 야채곱창 핵마늘곱창</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.green800 }}>정문으로부터 5분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/GDcNRk4y9')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/gat.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>갯마을칼국수</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>해물칼국수 새싹비빔밥 왕만두</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.green800 }}>정문으로부터 5분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/xaPxmPZ9')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/gosoo.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>고수찜닭</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>찜닭 반마리 한마리 한마리반</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.green800 }}>정문으로부터 6분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/xZDXkt1M')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/bchae.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>백채김치찌개</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>김치찌개 달걀말이 햄구이</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.green800 }}>정문으로부터 6분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/FFviFchH')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/dnmyung.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>동아냉면 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.3</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>물냉면 비빔냉면 만두</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.green800 }}>정문으로부터 6분</Text></View>
        </TouchableOpacity>
    </ScrollView>
);

const ThirdRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/Ft8lapxq')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/gcn.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>까치네 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>치즈알밥+쫄순 돈가스+쫄순 돈가스+냉면</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.orange500 }}>정문으로부터 7분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/FT0kk9oh')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/sdaepo.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>쌍대포 소금구이</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>한방껍데기 특삼겹너덜이 시그널오므라이스</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.orange500 }}>정문으로부터 8분</Text></View>
        </TouchableOpacity>
    </ScrollView>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
});

export default function KFood() {
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
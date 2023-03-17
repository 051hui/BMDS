import React from "react"
import { StyleSheet, TouchableOpacity, ScrollView, Image, Linking, useWindowDimensions } from "react-native"
import Emoji from "react-native-emoji";
import { View, Text } from "../theme"
import { Colors } from "react-native-paper";
import { TabView, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const FirstRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/xlWV6MAW')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/gudon.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>가문의우동</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>연어덮밥 야채알밥 김치치즈가츠동</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.blue500 }}>정문으로부터 2분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5wfENuyY')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/gossi.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>고씨네</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.3</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>스페셜카레 버섯카레 돈까스카레</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 2분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/G6D5rct3')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/mister.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>미스터카츠</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.3</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>미스터카츠 스페셜모듬카츠 옛날왕돈까스</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 3분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5IFT95QA')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/brown.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>브라운돈까스</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.3</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>등심돈까스 안심돈까스 매운돈까스</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 3분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/F2vDsfes')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/yubu.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>유부왕</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>유부왕유부 볶음김치유부 참치마요유부</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 3분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5xlja4h1')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/mumo.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>무모한초밥</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.3</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>무모한 메가초밥세트 무모한 연어초밥</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 3분</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
);

const SecondRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/5kLXelcG')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/ginja.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>긴자료코</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>데미그라스 돈까스 가츠동 사케동</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.green500 }}>정문으로부터 4분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/G5rQt3OT')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/tatami.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>타타미</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>닭구이벤또 치킨까츠벤또 연어벤또</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 4분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/FMA667H6')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/izawa.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>이자와</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>규카츠 스테키동 돈토로동</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 4분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5eGdZsCe')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/takobi.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>타코비</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>오리지널 갈릭치즈 와사비 타코야끼</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 4분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5kLXHLjF')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/about.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>어바웃샤브</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.3</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>쇠고기샤브칼국수 해물샤브칼국수</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 6분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/FBwDO1KG')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/ninja.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>닌자초밥</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>모듬초밥 특선초밥 연어캘리포니아롤</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 6분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/FHYlsMQ2')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/makanai.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>마카나이</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>매운돈코츠라멘 야끼차슈라멘</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 6분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/xpPaapCt')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/domae.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>도마에</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>회덮밥 캘리포니아롤 알밥 사케동</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 6분</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
);

const ThirdRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/56IDUIb1')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/churu.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>츄르츄르 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>차슈라멘 연어스시 특초밥</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.orange500 }}>정문으로부터 7분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/FKKO7ZzR')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/saiko.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>스시 사이꼬</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.3</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>사이꼬특초밥 런치점심초밥 연어롤</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.orange500 }}>정문으로부터 8분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/IMQppgbV')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/stokyo.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>작은도쿄 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>작은도쿄텐동 바질방울토마토</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.orange500 }}>정문으로부터 8분</Text></View>
        </TouchableOpacity>
    </ScrollView>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
});

export default function JFood() {
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
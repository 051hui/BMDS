import React from "react"
import { StyleSheet, TouchableOpacity, ScrollView, Image, Linking, useWindowDimensions } from "react-native"
import Emoji from "react-native-emoji";
import { View, Text } from "../theme"
import { Colors } from "react-native-paper";
import { TabView, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const FirstRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/5gir36SS')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/pho36.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>포36거리 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>소고기쌀국수 히레가스 포돈정식</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.blue500 }}>정문으로부터 1분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/GnG0aWlx')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/pholime.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>포라임 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>스프링롤 분짜 양지차돌쌀국수</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 1분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/52lc48Wz')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/saigon.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>사이공마켓</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>돼지고기덮밥 소고기팟타이 월남뽕</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 2분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5kLXxZn3')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/litto.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>리또리또</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>부리또 프렌치후라이 어니언링</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 2분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/GjRLXAqu')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/ddeum.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>뜸들이다</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>도란도란 삼겹살카레 덮밥</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 3분</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
);

const SecondRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/5kLxQeoa')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/sub.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>써브웨이</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>이탈리안비엠티 15cm 세트</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 4분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/GY2TAJ04')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/monple.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>몬스터플레이스 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.7</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>몬스터샐러드 그릭요거트 플레인요거트</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 4분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/GcjnKbAW')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/masibasi.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>마시앤바시 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>시금치크림파스타 차이나치킨</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 4분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/xIh2DZxH')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/bena.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>베나레스</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>오늘의커리 런치세트 커플세트</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 5분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5ncX66AE')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/dakogi.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>다코기</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>후라이드치킨 반반치킨 로스트치킨</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 5분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/xRQhQeG0')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/xinmoi.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>신머이 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>닭반마리쌀국수 소고기쌀국수 분짜</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 5분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/xhHnEMz7')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/miho.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>미호식당</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>깐간장새우정식 새우해물짬뽕</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 5분</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
);

const ThirdRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/FmgS5WdW')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/yogit.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>요지트</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.7</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>그릭요거트 망고그릭요거트 플레인라씨</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.orange500 }}>정문으로부터 7분</Text></View>
        </TouchableOpacity>
    </ScrollView>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
});

export default function EFood() {
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
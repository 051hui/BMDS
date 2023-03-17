import React from "react"
import { StyleSheet, TouchableOpacity, ScrollView, Image, Linking, useWindowDimensions } from "react-native"
import Emoji from "react-native-emoji";
import { View, Text } from "../theme"
import { Colors } from "react-native-paper";
import { TabView, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const FirstRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/xE16u7iA')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/dal.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>달볶이</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>떡볶이 순대 튀김 오뎅</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.blue500 }}>정문으로부터 1분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/GkKI1hW5')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/buskup.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>버스컵떡볶이</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>원조떡볶이 눈꽃떡볶이 포테이토떡볶이</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 1분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/x0ahZxH1')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/seond.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>선다래 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>비프오므라이스 매운카르보나라떡볶이</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 1분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/Fk5apCXR')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/jongno.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>종로김밥</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.3</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>김밥 라볶이 돈가스</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 1분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/xaPfVNF7')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/bf.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>베스트프렌드</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>반반맛떡볶이 고추장떡볶이 짜장떡볶이</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 1분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/xjeJ7TTO')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/pb.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>빨봉분식</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>빨봉떡볶이 빨봉돈까스 연탄불고기덮밥</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 2분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/xxxAAJPS')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/towa.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>또와또 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>또와떡불 마약볶음밥</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.blue500 }}>정문으로부터 3분</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
);

const SecondRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/IIqtOVfs')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/sbool.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>신불떡볶이</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>떡볶이 치즈떡볶이 만두 오뎅</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.green500 }}>정문으로부터 4분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/FNmtinlJ')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/modu.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>모두랑</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.6</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>옛날떡볶이 2인 차돌떡볶이 2인</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 5분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5kLp9a7g')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/sjeon.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>신전떡볶이 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>떡볶이 로제떡볶이 오뎅 만두</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 5분</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/5iz0T11g')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/snt.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>와우신내떡 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.5</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>와우떡볶이 갈릭후라이세트 후라이바스켓세트</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.green500 }}>정문으로부터 6분</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
);

const ThirdRoute = () => (
    <ScrollView>
        <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={() => Linking.openURL('http://naver.me/xorKD9hP')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/hisb.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>한입소반 <Icon name="thumb-up" size={20} color={Colors.blue600}/></Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>묵은지참치김밥 매콤멸치김밥 직화제육김밥</Text>
            <View style={[{ flex: 1 }, styles.textView]}><Text style={{ color: Colors.orange500 }}>정문으로부터 7분</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('http://naver.me/FbRiSrgP')}>
            <View style={styles.image}><Image style={styles.image} source={require('../src/assets/images/cndb.jpg')} /></View>
            <View style={[{ flex: 2.5 }, styles.textView]}>
                <Text style={styles.title}>청년다방</Text>
                <Text style={styles.star}><Emoji name="star" /> 4.4</Text>
            </View>
            <Text style={[{ flex: 1 }, styles.textView]}>차돌떡볶이 통큰오짱떡볶이 버터갈릭감자튀김</Text>
            <View style={[{ flex: 1 }, styles.textView]}>
                <Text style={{ color: Colors.orange500 }}>정문으로부터 10분</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
});

export default function BFood() {
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
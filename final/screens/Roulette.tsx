import React, { useState } from "react"
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native"
import { View, Text } from "../theme"
import { Colors } from "react-native-paper";
import Emoji from "react-native-emoji";

const restaurants: Array<{ name: string, rating: number, menu: string, dist: string }> = [
    { name: "육쌈냉면", rating: 4.1, menu: '물냉면+숯불고기 비빔냉면+숯불고기', dist: '3분' },
    { name: '하마 가정식백반', rating: 4.2, menu: '함박백반 생선백반 마파두부백반', dist: '3분' },
    { name: '달볶이', rating: 4.5, menu: '떡볶이 순대 튀김 오뎅', dist: '1분' },
    { name: '버스컵떡볶이', rating: 4.5, menu: '원조떡볶이 눈꽃떡볶이 포테이토떡볶이', dist: '1분' },
    { name: '선다래', rating: 4.4, menu: '비프오므라이스 매운카르보나라떡볶이', dist: '1분' },
    { name: '종로김밥', rating: 4.3, menu: '김밥 라볶이 돈가스', dist: '1분' },
    { name: '베스트프렌드', rating: 4.6, menu: '반반맛떡볶이 고추장떡볶이 짜장떡볶이', dist: '1분' },
    { name: '빨봉분식', rating: 4.4, menu: '빨봉떡볶이 빨봉돈까스 연탄불고기덮밥', dist: '2분' },
    { name: '또와또', rating: 4.4, menu: '또와떡불 마약볶음밥', dist: '3분' },
    { name: '탕화쿵푸', rating: 4.6, menu: '마라탕 마라향궈 마라반 꿔바로우', dist: '1분' },
    { name: '정', rating: 4.4, menu: '매운맛탕수육 고추간짜장 깐풍기', dist: '3분' },
    { name: '신룽푸마라탕', rating: 4.5, menu: '마라탕 마라샹궈 꿔바로우', dist: '3분' },
    { name: '홍짜장', rating: 4.3, menu: '홍짜장 홍짬뽕 탕수육 군만두', dist: '3분' },
    { name: '가문의우동', rating: 4.4, menu: '연어덮밥 야채알밥 김치치즈가츠동', dist: '2분' },
    { name: '고씨네', rating: 4.3, menu: '스페셜카레 버섯카레 돈까스카레', dist: '2분' },
    { name: '미스터카츠', rating: 4.3, menu: '미스터카츠 스페셜모듬카츠', dist: '3분' },
    { name: '브라운돈까스', rating: 4.3, menu: '등심돈까스 안심돈까스 매운돈까스', dist: '3분' },
    { name: '유부왕', rating: 4.4, menu: '볶음김치유부 참치마요유부', dist: '3분' },
    { name: '무모한초밥', rating: 4.3, menu: '메가초밥세트 연어초밥', dist: '3분' },
    { name: '달려라팬', rating: 4.4, menu: '직화함박스테이크 봉골레파스타', dist: '3분' },
    { name: '피자보이시나', rating: 4.8, menu: '베이컨포테이토 더블바베큐 베이컨체다', dist: '3분' },
    { name: '포36거리', rating: 4.6, menu: '소고기쌀국수 히레가스 포돈정식', dist: '1분' },
    { name: '포라임', rating: 4.6, menu: '스프링롤 분짜 양지차돌쌀국수', dist: '1분' },
    { name: '사이공마켓', rating: 4.5, menu: '돼지고기덮밥 소고기팟타이 월남뽕', dist: '2분' },
    { name: '리또리또', rating: 4.5, menu: '부리또 프렌치후라이 어니언링', dist: '2분' },
    { name: '뜸들이다', rating: 4.4, menu: '도란도란 삼겹살카레 덮밥', dist: '3분' }
]

export default function Roulette() {
    const [num, change] = useState(0);
    const changeNum = function () {
        change((num: number) => { return Math.floor(Math.random() * restaurants.length) })
    }

    return (
        <View style={styles.view}>
            <View border style={styles.menuView}>
                <View style={styles.innerMenuView}>
                    <Text style={styles.MenuText1}>오늘 메뉴는 ... <Emoji name="thinking_face" /></Text>
                    <View style={styles.MenuTextView2}><Text style={styles.MenuText2}><Emoji name="sparkles" />{restaurants[num].name}<Emoji name="sparkles" /></Text></View>
                    <Text style={styles.MenuText1}>어떠세요 ?</Text>
                </View>
                <View style={styles.innerMenuView2}>
                    <Text style={styles.MenuText3}><Emoji name="star" />{restaurants[num].rating}</Text>
                    <Text style={styles.MenuText3}>{restaurants[num].menu}</Text>
                    <Text style={[styles.MenuText3,{color: Colors.purple500 }]}><Emoji name="walking" />정문으로부터 {restaurants[num].dist}</Text>
                </View>
            </View >
            <TouchableOpacity style={styles.button} onPress={changeNum}>
                <Text style={styles.buttonText}>버튼 눌러 메뉴 정하기</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {flex: 1, padding: 30,  alignItems: 'center', paddingBottom:45},
    menuView: { flex: 3, alignItems:'center', borderWidth: 2, borderRadius:20, width:'100%', padding:20, marginTop:20, marginBottom:15 },
    innerMenuView: {flex:5, alignItems:'center', textAlign:'center', width:'100%', paddingBottom:25, paddingTop:10},
    innerMenuView2: {flex:3, alignItems:'center', textAlign:'center', backgroundColor: Colors.purple50, borderRadius:15, width:'100%',marginBottom:10, paddingTop:23},
    MenuText1: {flex:1, fontSize: 24,paddingTop:7, paddingBottom:7,fontWeight:'bold'},
    MenuTextView2: {flex:2, width:'100%', alignItems:'center', backgroundColor:Colors.purple100, borderRadius:15},
    MenuText2: {fontSize: 27, fontWeight:'bold',paddingTop:18, paddingBottom:18, color:Colors.black},
    MenuText3: {fontSize:17, fontWeight:'bold', color:Colors.black},
    button:{width:'97%', flex:0.5, marginTop:30, alignItems:'center', borderRadius:20, elevation:4, backgroundColor: Colors.indigo100, paddingTop:23, marginBottom:20},
    buttonText:{fontSize:25, fontWeight:'bold', color:Colors.black}
})
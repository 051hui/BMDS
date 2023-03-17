import React, { useState } from "react"
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native"
import { View, Text } from "../theme"
import { Colors } from "react-native-paper";
import Emoji from "react-native-emoji";


const restaurants: Array<{ name: string, rating: number, menu: string, dist: string }> = [
    { name: "육쌈냉면", rating: 4.1, menu: '물냉면+숯불고기 비빔냉면+숯불고기', dist: '3분' },
    { name: '하마 가정식백반', rating: 4.2, menu: '함박백반 생선백반 마파두부백반', dist: '3분' },
    { name: "숙대소반", rating: 4.4, menu: '쫄순 치즈알밥 돈가스', dist: '4분' },
    { name: '서울쌈냉면', rating: 4.4, menu: '물냉면+고기 비빔냉면+고기 왕만두', dist: '4분' },
    { name: '홍곱창', rating: 4.6, menu: '데리야끼막창 야채곱창 핵마늘곱창', dist: '5분' },
    { name: '갯마을칼국수', rating: 4.4, menu: '해물칼국수 새싹비빔밥 왕만두', dist: '5분' },
    { name: '고수찜닭', rating: 4.4, menu: '찜닭 반마리 한마리 한마리반', dist: '6분' },
    { name: '백채김치찌개', rating: 4.5, menu: '김치찌개 달걀말이 햄구이', dist: '6분' },
    { name: '동아냉면', rating: 4.3, menu: '물냉면 비빔냉면 만두', dist: '6분' },
    { name: '달볶이', rating: 4.5, menu: '떡볶이 순대 튀김 오뎅', dist: '1분' },
    { name: '버스컵떡볶이', rating: 4.5, menu: '원조떡볶이 눈꽃떡볶이 포테이토떡볶이', dist: '1분' },
    { name: '선다래', rating: 4.4, menu: '비프오므라이스 매운카르보나라떡볶이', dist: '1분' },
    { name: '종로김밥', rating: 4.3, menu: '김밥 라볶이 돈가스', dist: '1분' },
    { name: '베스트프렌드', rating: 4.6, menu: '반반맛떡볶이 고추장떡볶이 짜장떡볶이', dist: '1분' },
    { name: '빨봉분식', rating: 4.4, menu: '빨봉떡볶이 빨봉돈까스 연탄불고기덮밥', dist: '2분' },
    { name: '또와또', rating: 4.4, menu: '또와떡불 마약볶음밥', dist: '3분' },
    { name: '신불떡볶이', rating: 4.6, menu: '떡볶이 치즈떡볶이 만두 오뎅', dist: '4분' },
    { name: '모두랑', rating: 4.6, menu: '옛날떡볶이 2인 차돌떡볶이 2인', dist: '5분' },
    { name: '신전떡볶이', rating: 4.5, menu: '떡볶이 로제떡볶이 오뎅 만두', dist: '5분' },
    { name: '와우신내떡', rating: 4.5, menu: '와우떡볶이 갈릭후라이세트', dist: '6분' },
    { name: '탕화쿵푸', rating: 4.6, menu: '마라탕 마라향궈 마라반 꿔바로우', dist: '1분' },
    { name: '정', rating: 4.4, menu: '매운맛탕수육 고추간짜장 깐풍기', dist: '3분' },
    { name: '신룽푸마라탕', rating: 4.5, menu: '마라탕 마라샹궈 꿔바로우', dist: '3분' },
    { name: '홍짜장', rating: 4.3, menu: '홍짜장 홍짬뽕 탕수육 군만두', dist: '3분' },
    { name: '샤오촨', rating: 4.6, menu: '마라탕 마라샹궈 마파두부 궈바러우', dist: '5분' },
    { name: '홍콩반점0410', rating: 4.4, menu: '짜장면 짬뽕 탕수육 군만두', dist: '6분' },
    { name: '가문의우동', rating: 4.4, menu: '연어덮밥 야채알밥 김치치즈가츠동', dist: '2분' },
    { name: '고씨네', rating: 4.3, menu: '스페셜카레 버섯카레 돈까스카레', dist: '2분' },
    { name: '미스터카츠', rating: 4.3, menu: '미스터카츠 스페셜모듬카츠', dist: '3분' },
    { name: '브라운돈까스', rating: 4.3, menu: '등심돈까스 안심돈까스 매운돈까스', dist: '3분' },
    { name: '유부왕', rating: 4.4, menu: '볶음김치유부 참치마요유부', dist: '3분' },
    { name: '무모한초밥', rating: 4.3, menu: '메가초밥세트 연어초밥', dist: '3분' },
    { name: '긴자료코', rating: 4.6, menu: '데미그라스 돈까스 가츠동 사케동', dist: '4분' },
    { name: '타타미', rating: 4.5, menu: '닭구이벤또 치킨까츠벤또 연어벤또', dist: '4분' },
    { name: '이자와', rating: 4.4, menu: '규카츠 스테키동 돈토로동', dist: '4분' },
    { name: '타코비', rating: 4.6, menu: '오리지널 갈릭치즈 와사비 타코야끼', dist: '4분' },
    { name: '어바웃샤브', rating: 4.3, menu: '쇠고기샤브칼국수 해물샤브칼국수', dist: '6분' },
    { name: '닌자초밥', rating: 4.4, menu: '모듬초밥 특선초밥 연어캘리포니아롤', dist: '6분' },
    { name: '마카나이', rating: 4.4, menu: '매운돈코츠라멘 야끼차슈라멘', dist: '6분' },
    { name: '도마에', rating: 4.4, menu: '회덮밥 캘리포니아롤 알밥 사케동', dist: '6분' },
    { name: '달려라팬', rating: 4.4, menu: '직화함박스테이크 봉골레파스타', dist: '3분' },
    { name: '피자보이시나', rating: 4.8, menu: '베이컨포테이토 더블바베큐 베이컨체다', dist: '3분' },
    { name: '라리에또', rating: 4.7, menu: '리코타샐러드 토마토새우스파게티', dist: '4분' },
    { name: '나폴리키친', rating: 4.4, menu: '마르게리타피자 빠네까르보나라', dist: '6분' },
    { name: '그린파스타', rating: 4.0, menu: '까르보빠네 고르곤졸라화덕피자', dist: '6분' },
    { name: '포36거리', rating: 4.6, menu: '소고기쌀국수 히레가스 포돈정식', dist: '1분' },
    { name: '포라임', rating: 4.6, menu: '스프링롤 분짜 양지차돌쌀국수', dist: '1분' },
    { name: '사이공마켓', rating: 4.5, menu: '돼지고기덮밥 소고기팟타이 월남뽕', dist: '2분' },
    { name: '리또리또', rating: 4.5, menu: '부리또 프렌치후라이 어니언링', dist: '2분' },
    { name: '뜸들이다', rating: 4.4, menu: '도란도란 삼겹살카레 덮밥', dist: '3분' },
    { name: '써브웨이', rating: 4.4, menu: '이탈리안비엠티 15cm 세트', dist: '4분' },
    { name: '몬스터플레이스', rating: 4.7, menu: '몬스터샐러드 그릭요거트 플레인요거트', dist: '4분' },
    { name: '마시앤바시', rating: 4.5, menu: '시금치크림파스타 차이나치킨', dist: '4분' },
    { name: '베나레스', rating: 4.5, menu: '오늘의커리 런치세트 커플세트', dist: '5분' },
    { name: '다코기', rating: 4.4, menu: '후라이드치킨 반반치킨 로스트치킨', dist: '5분' },
    { name: '신머이', rating: 4.6, menu: '닭반마리쌀국수 소고기쌀국수 분짜', dist: '5분' },
    { name: '미호식당', rating: 4.5, menu: '깐간장새우정식 새우해물짬뽕', dist: '5분' }
]


export default function Roulette2() {
    const [num, change] = useState(10);
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
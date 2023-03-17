import { useNavigation } from "@react-navigation/native"
import React, { useCallback } from "react"
import { StyleSheet, TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native"
import { View, Text} from "../theme"
import { Colors } from "react-native-paper"

export default function chooseRoulette() {
    const navigation = useNavigation()
    const goRoulette1 = useCallback(() => navigation.navigate('룰렛1' as never), [] as never)
    const goRoulette2 = useCallback(() => navigation.navigate('룰렛2' as never), [] as never)
    const goRoulette3 = useCallback(() => navigation.navigate('룰렛3' as never), [] as never)

    return (
        <SafeAreaView>
            <View style={[styles.view]}>
            <View style={{height:40}}><Text style={styles.infoText}>먼저 갈 수 있는 맛집의 범위를 선택해 주세요.</Text></View>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.blue200 }]} onPress={goRoulette1}>
                    <Text style={styles.text}>3분 이내</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.green200 }]} onPress={goRoulette2}>
                    <Text style={styles.text}>6분 이내</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.orange200 }]} onPress={goRoulette3}>
                    <Text style={styles.text}>10분 이내</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    view: { flex: 1, padding: 30 },
    text: { fontSize: 20, fontWeight: "bold", color: Colors.black, textAlign: "center", flex: 1},
    button: {
        flexDirection: "row",
        height: 50,
        marginBottom: 15,
        alignItems: "center",
        borderRadius: 10,
    },
    infoText: { fontSize:15,fontWeight:'bold',  textAlign:'center'}
})
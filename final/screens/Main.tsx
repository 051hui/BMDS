import { useNavigation } from "@react-navigation/native"
import React, { useCallback } from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { SafeAreaView } from "react-native"
import { View } from "../theme"
import { Colors } from "react-native-paper"
import Emoji from 'react-native-emoji';

export default function Main() {
    const navigation = useNavigation()
    const goKFood = useCallback(() => navigation.navigate('한식' as never), [] as never)
    const goBFood = useCallback(() => navigation.navigate('분식' as never), [] as never)
    const goCFood = useCallback(() => navigation.navigate('중식' as never), [] as never)
    const goJFood = useCallback(() => navigation.navigate('일식' as never), [] as never)
    const goYFood = useCallback(() => navigation.navigate('양식' as never), [] as never)
    const goEFood = useCallback(() => navigation.navigate('기타' as never), [] as never)
    return (
        <SafeAreaView>
            <View style={[styles.view]}>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.purple100 }]} onPress={goKFood}>
                    <Text style={styles.text}> <Emoji name="kr" />  한식  <Emoji name="kr" /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.red100 }]} onPress={goBFood}>
                    <Text style={styles.text}><Emoji name="ramen" />  분식  <Emoji name="ramen" /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.orange100 }]} onPress={goCFood}>
                    <Text style={styles.text}><Emoji name="cn" />  중식  <Emoji name="cn" /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.yellow100 }]} onPress={goJFood}>
                    <Text style={styles.text}><Emoji name="jp"/>  일식  <Emoji name="jp"/></Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.green100 }]} onPress={goYFood}>
                    <Text style={styles.text}><Emoji name="spaghetti" />  양식  <Emoji name="spaghetti" /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.blue100 }]} onPress={goEFood}>
                    <Text style={styles.text}><Emoji name="grinning" />  기타  <Emoji name="grinning" /></Text>
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
    }
})
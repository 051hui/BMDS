import React from "react"
import { StyleSheet, SafeAreaView} from "react-native"
import { View, Text, Switch } from "../theme"
import { useTheme } from "react-native-paper";
import { useToggleThemeContext } from "./ToggleThemeProvider";

export default function Settings() {
    const theme= useTheme()
    const toggleTheme = useToggleThemeContext()
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <View border style={styles.button}>
                    <Text style={styles.text}>다크모드</Text>
                    <Switch style={styles.switch} value={theme.dark} onValueChange={toggleTheme}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {flex:1, padding: 30},
    text: {fontSize :20},
    button: {
        flexDirection: "row",
        height:50,
        paddingLeft:20, 
        alignItems:"center",
        borderRadius:10,
        borderWidth:1,
    },
    switch:{
        marginLeft: "auto"
    }
})
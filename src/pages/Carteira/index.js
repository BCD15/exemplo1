import React from "react";
import { View, Text, styleSheet } from "react-native-web";

export default function Carteira() {
    return (
        <View style={styles.container}>
            <Text>Carteira</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
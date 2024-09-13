import { Text } from "@gluestack-ui/themed";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";


export function ProgresBarProgress({ progress }: { progress: number }) {
    const progressTask = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(progressTask, {
            toValue: progress,
            duration: 500,
            useNativeDriver: false
        }).start()
    }, [progress])

    const widthInterpolated = progressTask.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%']
    })
    

    return (
        <View style={styles.container} >
            <View style={styles.progressBar} >
                <Animated.View style={[styles.fillBar, { width: widthInterpolated }]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: '100%',
        width: '100%',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#a08',
        paddingVertical: 6,
        borderRadius: 50,
    },
    progressBar: {
        height: 15,
        flexDirection: "row",
        width: 'auto',
        backgroundColor: '$secondary400',
        borderColor: '#a04',
        borderWidth: 2,
        borderRadius: 50,
    },
    fillBar: {
        display: "flex",
        alignItems: "flex-end",
        backgroundColor: '#000',
        borderRadius: 50,
    }
  });
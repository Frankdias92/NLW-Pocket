import { LinearGradient } from "expo-linear-gradient";
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

    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            minWidth: '100%',
            width: '100%',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'flex-start',
            // backgroundColor: '#fff',
            paddingVertical: 6,
            borderRadius: 50,
        },
        progressBar: {
            height: 15,
            flexDirection: "row",
            width: 'auto',
            backgroundColor: '$secondary400',
            borderColor: '#a04',
            // borderWidth: 2,
            borderRadius: 50,
        },
        fillBar: {
            height: '100%',  // Assegura que o gradiente ocupe a altura total do progressBar
            borderRadius: 50,
        },
        button: {
            padding: 8,
            alignItems: 'center',
            borderRadius: 50,
          },
      });

    return (
        <View style={styles.container} className="rounded-full bg-zinc-800">
            <View style={styles.progressBar}>
                <Animated.View style={[styles.fillBar, { width: widthInterpolated }]} >
                <LinearGradient
                    colors={['#F472B6', '#8B5CF6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.fillBar }
                    />

                </Animated.View> 
                {/* <Animated.View style={[styles.fillBar, { width: widthInterpolated }]} /> */}
            </View>
        </View>
    )
}


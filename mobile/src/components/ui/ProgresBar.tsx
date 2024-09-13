import { Text } from "@gluestack-ui/themed";
import { Animated, StyleSheet, View } from "react-native";


export function ProgresBarProgress() {

    return (
        <View style={styles.container} >
            <View style={styles.progressBar} >
                <Animated.View style={styles.fillBar} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: '100%',
        width: '100%',
        flexDirection: "column", //column direction
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#a08',
        padding: 8,
        borderRadius: 50
    },
    progressBar: {
        height: 20,
        flexDirection: "row",
        width: 'auto',
        backgroundColor: '$secondary400',
        borderColor: '#a04',
        borderWidth: 2,
        borderRadius: 50
    },
    fillBar: {
        display: "flex",
        width: '10%',
        alignItems: "flex-end",
        backgroundColor: '#000',
        borderRadius: 50,
    }
  });
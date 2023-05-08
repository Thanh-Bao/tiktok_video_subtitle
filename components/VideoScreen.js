
import * as React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useTailwind } from 'tailwind-rn';

export default function App() {
    const video = React.useRef(null);
    const tailwind = useTailwind();

    return (
        <View >

            <Video
                ref={video}
                style={styles.video}
                source={require("../assets/big_buck_bunny.mp4")}
                resizeMode={ResizeMode.COVER}
                isLooping={true}
                shouldPlay={true}
                useNativeControls={false}
            />

            <View style={tailwind('pt-12 items-center')}>
                <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
                    <Text style={tailwind('text-blue-800 font-semibold')}>
                        Thêm sub vào đây!!
                    </Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: '100%',
        height: 200,
    }
});

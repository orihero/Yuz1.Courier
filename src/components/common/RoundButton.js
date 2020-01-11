import React, { useState, useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import styles, { colors } from '../../constants/styles'
import Animated, { Easing } from 'react-native-reanimated';
import { loop, runTiming } from '../../utils/animation';
import { useMemoOne } from 'use-memo-one';

let { useCode, block, startClock, interpolate, Clock, Value, cond, and, not, clockRunning, stopClock, set, } = Animated;

const RoundButton = ({ text, animated = true, icon, onPress = () => { } }) => {
    const [width, setwidth] = useState(0)
    const [playing, setPlaying] = useState(true)
    const { isPlaying, animation, clock, opacity, opacityClock } = useMemoOne(
        () => ({
            isPlaying: new Value(0),
            animation: new Value(.8),
            clock: new Clock(),
            opacityClock: new Clock(),
            opacity: new Value(1)
        }),
        []
    );
    useEffect(() => {
        animation.setValue(0.8)
    }, [])
    useCode(
        block([
            cond(and(not(clockRunning(clock)), isPlaying), block([startClock(clock), set(opacity, runTiming(opacityClock, new Value(0), { easing: Easing.linear, duration: 100, toValue: 0 }))])),
            cond(and(clockRunning(clock), not(isPlaying)), block([stopClock(clock), set(opacity, runTiming(opacityClock, new Value(1), { easing: Easing.linear, duration: 100, toValue: 1 }))])),
            set(
                animation,
                loop({
                    clock,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    boomerang: false,
                    autoStart: false
                })
            ),
        ]),
        []
    );
    let runAnimation = () => {
        setPlaying(true);
        isPlaying.setValue(1);
    }
    let onCustomPress = () => {
        if (animated) {
            runAnimation();
        }
        setTimeout(onPress, 1000);
    }
    let translateX = interpolate(animation, { inputRange: [0, 1], outputRange: [-50, width] })
    return (
        <TouchableWithoutFeedback onPress={onCustomPress}>
            <View style={[styles.buttonPadding, styles.defaultRadius, styles.centeredContainer, styles.shadow, styles.row, { backgroundColor: colors.lightGray, overflow: 'hidden' }]}
                onLayout={({ nativeEvent }) => {
                    if (width === 0) {
                        setwidth(nativeEvent.layout.width)
                    }
                }}
            >
                <Animated.Text style={[styles.buttonText, { opacity }]}>{text}</Animated.Text>
                <Animated.View style={{ transform: [{ translateX }, { translateY: 16 }], ...StyleSheet.absoluteFillObject, position: 'absolute', }}>
                    {icon()}
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RoundButton

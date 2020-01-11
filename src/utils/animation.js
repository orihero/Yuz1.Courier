import Animated, { Easing } from 'react-native-reanimated';
import { Platform } from 'react-native';

const {
    Clock,
    Value,
    block,
    timing,
    spring,
    cond,
    decay,
    stopClock,
    set,
    startClock,
    clockRunning,
    onChange,
    not,
    and,
} = Animated;

function runDecay(
    clock,
    value,
    velocity,
    rerunDecaying,
    deceleration
) {
    const state = {
        finished: new Value(0),
        velocity: new Value(0),
        position: new Value(0),
        time: new Value(0),
    };

    const config = {
        deceleration: deceleration || (Platform.OS === 'ios' ? 0.998 : 0.985),
    };

    return [
        cond(clockRunning(clock), 0, [
            cond(rerunDecaying, 0, [
                set(rerunDecaying, 1),
                set(state.finished, 0),
                set(state.velocity, velocity),
                set(state.position, value),
                set(state.time, 0),
                startClock(clock),
            ]),
        ]),
        decay(clock, state, config),
        cond(state.finished, stopClock(clock)),
        state.position,
    ];
}

function runSpring(
    clock,
    value,
    dest,
    config = {
        stiffness: new Value(100),
        mass: new Value(1),
        damping: new Value(10),
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
        toValue: new Value(0),
    }
) {
    const state = {
        finished: new Value(0),
        velocity: new Value(0),
        position: new Value(0),
        time: new Value(0),
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.velocity, 0),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            set(config.toValue, dest),
            startClock(clock),
        ]),
        spring(clock, state, config),
        cond(state.finished, stopClock(clock)),
        state.position,
    ]);
}

function runTiming(
    clock,
    value,
    config
) {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0),
    };

    return block([
        onChange(config.toValue, set(state.frameTime, 0)),
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            startClock(clock),
        ]),
        timing(clock, state, config),
        cond(state.finished, stopClock(clock)),
        state.position,
    ]);
}

const runDelay = (node, duration) => {
    const clock = new Clock();
    return block([
        runTiming(clock, 0, { toValue: 1, duration, easing: Easing.linear }),
        cond(not(clockRunning(clock)), node),
    ]);
};

const loop = (loopConfig) => {
    const { clock, easing, duration, boomerang, autoStart } = {
        clock: new Clock(),
        easing: Easing.linear,
        duration: 250,
        boomerang: false,
        autoStart: true,
        ...loopConfig,
    };
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0),
    };
    const config = {
        toValue: new Value(1),
        duration,
        easing,
    };

    return block([
        cond(and(not(clockRunning(clock)), autoStart ? 1 : 0), startClock(clock)),
        timing(clock, state, config),
        cond(state.finished, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.frameTime, 0),
            boomerang
                ? set(config.toValue, cond(config.toValue, 0, 1))
                : set(state.position, 0),
        ]),
        state.position,
    ]);
};


export {
    runDecay,
    runDelay,
    runTiming,
    runSpring,
    loop
}
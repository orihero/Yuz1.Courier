import React, { useReducer } from 'react'
import { View, Text } from 'react-native'
import styles, { colors } from '../../constants/styles'
import { TextInput } from 'react-native-gesture-handler'

const RoundInput = ({ placeholder, name, value, onChange, state }) => {
    let reducer = (state, action) => {
        switch (action.type) {
            case "DEFAULT":
                return colors.gray
            case "SUCCESS":
                return colors.green
            case "DANGER":
                return colors.red
            default:
                return state;
        }
    }
    const [borderColor, dispatch] = useReducer(reducer, colors.gray)
    let onFocus = () => {
        dispatch({ type: 'SUCCESS' })
    }
    let onTextChange = text => {
        onChange(name, text);
    }
    let onBlur = (e) => {
        if (value && value !== '') {
            dispatch({ type: 'SUCCESS' })
            return
        }
        if (state && state[name] !== '') {
            dispatch({ type: 'SUCCESS' })
            return
        }
        dispatch({ type: 'DANGER' })
    }
    return (
        <View style={styles.horizontalMargin}>
            <Text style={styles.defaultText}>{placeholder}</Text>
            <View style={[styles.defaultShape, styles.defaultRadius, { borderWidth: 1, borderColor, paddingLeft: 10 }]}>
                <TextInput
                    onFocus={onFocus}
                    onBlur={onBlur}
                    underlineColorAndroid={colors.transparent}
                    style={styles.defaultShape}
                    onChangeText={onTextChange}
                    secureTextEntry={name === 'password'}
                />
            </View>
        </View>
    )
}

export default RoundInput

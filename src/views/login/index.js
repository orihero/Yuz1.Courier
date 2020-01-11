import React, { useReducer } from 'react'
import { View, Text, Image } from 'react-native'
import styles, { colors } from '../../constants/styles';
import logo from '../../assets/images/delivery.png';
import locales from '../../constants/locales';
import RoundInput from '../../components/common/RoundInput';
import RoundButton from '../../components/common/RoundButton';
import FA5 from 'react-native-vector-icons/FontAwesome5'

export const Login = ({ navigation }) => {
    let reducer = (state, action) => {
        state[action.type] = action.value
        return state
    }
    const [state, dispatch] = useReducer(reducer, { login: '', password: '' })
    let onTextChange = (name, value) => {
        dispatch({ type: name, value })
    }
    let onLogin = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <View style={styles.centeredContainer}>
                <Image style={{ width: 350 * .6, height: 290 * .6 }} source={logo} />
                <Text style={styles.systemText}>{locales.enterToSystem}</Text>
            </View>
            <RoundInput placeholder={locales.login} onChange={onTextChange} state={state} name={"login"} />
            <RoundInput placeholder={locales.password} onChange={onTextChange} state={state} name={"password"} />
            <View style={[styles.centeredContainer, styles.verticalMargin]}>
                <RoundButton onPress={onLogin} text={locales.enter} icon={() => <FA5 name="truck" color={colors.darkGray} size={20} />} />
            </View>
        </View>
    )
}


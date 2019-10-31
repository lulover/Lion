import React from "react";
import {TextInput,StyleSheet} from 'react-native';

const Input = ({value,changeText, addTodo}) => (
    <TextInput
    value={value}
    style={styles.input}
    placeholder={"오늘 어떤 일을 하실건가요?"}
    maxLength={30}
    onChangeText={changeText} //입력창에 글자가 바뀌면 onChangeText가 활성화 된다
    onEndEditing={addTodo} //입력이 끝나고 enter를 누르면 onEndEdition이 활성화
    returnKeyType="done"/>
);

const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop:15,
    }
})
export default Input;
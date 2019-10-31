import React from "react"
import {View,Text,StyleSheet,Dimensions,TouchableOpacity} from "react-native"
import {AntDesign} from "@expo/vector-icons" 

const {width,height} = Dimensions.get('window'); //Dimensions는 현재 App이띄워지는 화면의 width와 height를 받아와 저장해준다

const TodoItem = ({ text, isComplete,changeComplete}) =>(
    <View style={styles.todoContainer}>
        <View style={styles.makerow}>
            <TouchableOpacity onPress={changeComplete}>
                <FontAwesome name={isComplete?"circle-o":"check-circle"} size={20} style={styles.check}/>
            </TouchableOpacity>
    
            <View style={styles.lineContainer}>
            <Text style={styles.todoitem}>{text}</Text>
            <TouchableOpacity onPress={deleteItem} style={styles.close}>
                <AntDesign name="closecircle" size={20}/>   {/* component에서 사용할 icon을 props로 제공 */}
            </TouchableOpacity>        
            </View>            
        </View>
    </View>  
);

const styles = StyleSheet.create({
    todoContainer: {
        padding: 5,
        marginTop: 20,
        borderBottomWidth:1,
        width: width-40, //얘는 전체 길이보다 40만큼 작게 해서 여유를 주는것입니다 width를 위에서 선언과 초기화 해주지 않으면 사용할수 없어요 width-40해줄수 없어요
    },
    todoitem: {
        flex : 1,
        fontSize: 20,
    },
    lineContainer: {
        flexDirection:'row',
        justifyContent:'space-between', //가로 정렬하는데 compo사이를 균등하게 space로 구분
        alignItems:'center', //세로정렬
        },
        checkbtn: {
        marginRight:20, //checkbtn에서 할 일을 오른쪽으로 떨어트리기 위해 사용
        },
    makerow:{
        flexDirection:'row',
    },
    check:{
        marginRight:10,
    },
    close:{
        marginLeft:0,
    },               
})
export default TodoItem;
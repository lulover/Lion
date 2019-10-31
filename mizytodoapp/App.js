import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle';
import Input from './app/components/Input';
import TodoItem from './app/components/TodoItem';


export default class App extends React.Component {
  constructor(props){
    super(props); //React.componet의 속성을 가져온다.
    this.state={
    inputValue: "", //input창에 보여지는 Text입니다 초깃값은 공백! Placeholder만 보여줌
    todos:[
        {
          title : "content",
        },
        {
          title: "content",
        },
      ]
    }
  }
  componentWillMount(){ //메소드를 가져와서 getData 실행
    this.getData()
  }

  storeData =() => {
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state));
  }
  getData = () =>{
    AsyncStorage.getItem('@todo:state').then((state) => {
      if (state !== null) {
        this.setState(JSON.parse(state));
      }
    });
  }
  _makeTodoItem = ({ item, index }) => {
    return (
      <TodoItem
        text={item.title}
        isComplete={item.isComplete}
        changeComplete={() => {
          const newTodo = [...this.state.todos];
          newTodo[index].isComplete = !newTodo[index].isComplete;
          this.setState({todos:newTodo}, this.storeData);
       }} 
        deleteItem={() => {
          const newTodo = [...this.state.todos];
          newTodo.splice(index,1);
          this.setState({todos:newTodo});
        }} 
      />
    );
  }
  _changeText = (value) => {
    this.setState({inputValue: value});
  }
  _addTodoItem = () => {
    if(this.state.inputValue != ''){
      const prevTodo = this.state.todos; //현재의 todos를 prevTodo에 넣습니다.
      const newTodo = { title: this.state.inputValue, isComplete:false}; //현재 input창에 있는 값을 새로운 할일로 등록
    
      this.setState({
        inputValue: '', //TodoItem이 추가되면 입력창은 비어야하므로
        todos: prevTodo.concat(newTodo) // 이전의 TodoItem에 새 Todo를 이어붙여 todos값으로 변경
      }, this.storeData);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headercenter}>
          <Header/>
         </View>
        <View style={styles.subtitleposition}>
          <Subtitle title="To Do" />
          <Input
              value = {this.state.inputValue}
              changeText={this._changeText} //입력할때마다 글자가 별하니 _changeText를 실행시켜줌
              addTodo={this._addTodoItem}/> {/* 입력이 완료되고 확인을 누르면(enter) 저장시키는 함수 */}
        </View>
        <View style={styles.subtitleposition}>
          <Subtitle title="To Do List"/>
          <FlatList
            style = {styles.subtitle_layout}
            data={this.state.todos}
            renderItem={this._makeTodoItem} // 언더 스코어 _ = 클래스 안에 선언된 메서드
            keyExtractor={(item,index) => { return `${index}`}}
          />
        </View>
      </View>
    );
  }
}
          
          
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headercentered : {
    alignItem : 'center',
  },
  subContainer: {
    marginLeft:20, 
    marginRight:20,
  }, 
});
  

import React from 'react';
import {Map} from "immutable";
import { createStore } from 'redux';
import {connect, Provider} from 'react-redux';
import './index.css';
const init = Map({
    parent:0,
    child1:0,
    child2:0
});
const reducer = (state = [], action) => {
  var newState = init;
    switch (action.type) {
        case 'PARENT':
            newState = state.setIn(['parent'], state.getIn(['parent'])+1);
            break;
        case 'CHILD1':
            newState = state.setIn(['child1'], state.getIn(['child1'])+1);
            break;
        case 'CHILD2':
            newState = state.setIn(['child2'], state.getIn(['child2'])+1);
            break;
        default:
            break;
    }
    return newState;
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const Parent = connect(
    (state)=>{
        return {
            count:state.get('parent')
        }
    },
    (dispatch)=>{
        return {
            parent:()=>{dispatch({'type':'PARENT'})},
            child1:()=>{dispatch({'type':'CHILD1'})},
            child2:()=>{dispatch({'type':'CHILD2'})}
        }
    }
)((props)=>{
        console.log('parent');
    return (
        <div className="layout">
            <h1>Parent</h1>
            <input type={"button"} value={"parent"} onClick={()=>props.parent()} />
            <input type={"button"} value={"child1"} onClick={()=>props.child1()} />
            <input type={"button"} value={"child2"} onClick={()=>props.child2()} />
            <span className={"value"}>{props.count}</span>
            <Child1></Child1>
            <Child2></Child2>

        </div>
    );
});
const Child1 = connect(
    (state)=>{return {
        count:state.getIn(['child1'])
    }},
    (dispatch)=>{
        return {
            parent:()=>{dispatch({'type':'PARENT'})},
            child1:()=>{dispatch({'type':'CHILD1'})},
            child2:()=>{dispatch({'type':'CHILD2'})}
        }
    }
)(
    (props)=>{
        console.log('child1');
        return (
            <div className="layout">
                <h1>Child1</h1>
                <input type={"button"} value={"parent"} onClick={()=>props.parent()} />
                <input type={"button"} value={"child1"} onClick={()=>props.child1()} />
                <input type={"button"} value={"child2"} onClick={()=>props.child2()} />
                <span className="value">{props.count}</span>
            </div>
        );
    }
);
const Child2 = connect(
    (state)=>{return {
        count:state.getIn(['child2'])
    }},
    (dispatch)=>{
        return {
            parent:()=>{dispatch({'type':'PARENT'})},
            child1:()=>{dispatch({'type':'CHILD1'})},
            child2:()=>{dispatch({'type':'CHILD2'})}
        }
    }
)(
    (props)=>{
        console.log('child2');
        return (
            <div className="layout">
                <h1>Child2</h1>
                <input type={"button"} value={"parent"} onClick={()=>props.parent()} />
                <input type={"button"} value={"child1"} onClick={()=>props.child1()} />
                <input type={"button"} value={"child2"} onClick={()=>props.child2()} />
                <span className="value">{props.count}</span>
            </div>
        );
    }
);
function App() {
  return (
    <Provider store={store}>
      <Parent>
      </Parent>
    </Provider>
  );
}
export default App;

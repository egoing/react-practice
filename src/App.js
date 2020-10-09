import React from 'react';
import {Map} from "immutable";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
const init = Map({

});
const reducer = (state = [], action) => {
  var newState = init;
    switch (action.type) {
        case 'CREATE_MAP_OPEN':
            newState = state.setIn(['MyMaps', 'CreateMap', 'is_open'], true);
            break;
        default:
            break;
    }
    return newState;
}
const store = createStore(reducer);
const Parent = ()=>{
    return (
        <div className="layout">
            <h1>Parent</h1>
            <Child1></Child1>
            <Child2></Child2>
        </div>
    );
}
const Child1 = ()=>{
    return (
        <div className="layout">
            <h1>Child1</h1>
        </div>
    );
}
const Child2 = ()=>{
    return (
        <div className="layout">
            <h1>Child2</h1>
        </div>
    );
}
function App() {
  return (
    <Provider store={store}>
      <Parent>
      </Parent>
    </Provider>
  );
}
export default App;

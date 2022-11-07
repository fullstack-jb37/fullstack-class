import React  from 'react'
// import { Provider } from 'react-redux'
// import { store } from './redux/index'
// import { store } from './redux-async/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import Users from './components/redux-component/Users'
// import AccountManagementConditionally from './components/redux-component/AccountManagementConditionally'
// import AccountManagementHooks from './components/redux-component/accountManagementHooks'
// import AccountManagement from './components/redux-component/AccountManagement'
import Counter from './components/hooks/useCustom/Counter'
// import AccessingDomElements from './components/hooks/useRef/AccessingDomElements'
// import PersistingValues from './components/hooks/useRef/PersistingValues'
// import UseMemoSample from './components/hooks/useMemo/UseMemoSample'
// import ParentChanger from './components/hooks/useCallback/ParentChanger'
// import MemoParentChanger from './components/fundamentals/reactMemo/MemoParentChanger'
// import UseContextWithUseReducer from './components/hooks/useContextWithUseReducer/UseContextWithUseReducer'
// import PostData from './components/hooks/useReducer/PostData'
// import FetchData from './components/hooks/FetchData'
// import PostData from './components/hooks/PostData'
// import UseContextA from './components/hooks/useContext/UseContextA'
// import UseReducerBasics from './components/hooks/useReducer/UseReducerBasics'
// import Interval from './components/hooks/Interval'
// import MouseCoordinates from './components/hooks/MouseCoordinates'
// import MouseCoordinatesParent from './components/hooks/MouseCoordinatesParent'
// import ColorList from './components/hooks/ColorList'
// import UseEffectHook from './components/hooks/UseEffectHook'
// import UseStateHook from './components/hooks/UseStateHook'
// import Parent from './components/Parent'
// import Form from './components/Form'
// import Button from './components/Button'
// import Styling from './components/Styling'
// import ListRenderingParent from './components/ListRenderingParent'
// import ConditionalElementContent from './components/ConditionalElementContent'
// import PrevState from './components/PrevState'
// import FunctionalComponent1 from './components/FunctionalComponent'
// import ClassComponent from './components/ClassComponent'
// import States from './components/States'
// import ListAsKeyParent from './components/ListAsKeyParent'

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent1 firstName={'Yossi'} lastName="Arye">
        <span>I'm your child!</span>
      </FunctionalComponent1> */}
      {/* <ClassComponent firstName={'Yossi'} lastName="Arye">
        <span>I'm your child!</span>
      </ClassComponent> */}
      {/* <States /> */}
      {/* <PrevState /> */}
      {/* <ConditionalElementContent /> */}
      {/* <ListRenderingParent /> */}
      {/* <ListAsKeyParent /> */}
      {/* <Styling
        styles={{
          primary: false,
          'big-font-size': true,
          'aquamarine-bg-color': true,
        }}
      /> */}
      {/* <Button type="primary" content="primary" />
      <Button type="secondary" content="secondary" /> */}
      {/* <Form /> */}
      {/* <Parent /> */}
      {/* <UseStateHook /> */}
      {/* <ColorList /> */}
      {/* <UseEffectHook /> */}
      {/* <MouseCoordinates /> */}
      {/* <MouseCoordinatesParent /> */}
      {/* <Interval /> */}
      {/* <FetchData /> */}
      {/* <PostData /> */}
      {/* <UseContextA /> */}
      {/* <UseReducerBasics /> */}
      {/* <PostData /> */}
      {/* <UseContextWithUseReducer /> */}
      {/* <MemoParentChanger /> */}
      {/* <ParentChanger /> */}
      {/* <UseMemoSample /> */}
      {/* <PersistingValues /> */}
      {/* <AccessingDomElements /> */}
      <Counter />
      {/* <Provider store={store}> */}
        {/* <AccountManagement /> */}
        {/* <AccountManagementConditionally creditCardDebt /> */}
        {/* <AccountManagementHooks /> */}
        {/* <Users /> */}
      {/* </Provider> */}
    </div>
  )
}

export default App

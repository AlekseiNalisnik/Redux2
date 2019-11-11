import React from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const initialState = {
    firstName: 'XXX',
    secondName: 'YYY'
};

const ACTION_CHANGE_FIRSTNAME = 'ACTION_CHANGE_FIRSTNAME';
const ACTION_CHANGE_SECONDNAME = 'ACTION_CHANGE_SECONDNAME';

const changeFirstName = (newFirstName) => {
    console.log(newFirstName);
    return {
        type: ACTION_CHANGE_FIRSTNAME,
        payload: newFirstName
    };
};

const changeSecondName = (newSecondName) => {
    return {
        type: ACTION_CHANGE_SECONDNAME,
        payload: newSecondName
    };
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ACTION_CHANGE_FIRSTNAME':
            return { ...state, firstName: action.payload };
        case 'ACTION_CHANGE_SECONDNAME':
            return { ...state, secondName: action.payload };
        default: 
            return state;
    }
};

const store = createStore(rootReducer);

console.log(store.getState());

class App extends React.Component {
    render() {
        // console.log('this is props - ', this.props); 
        // передаётся из mapStateToProps (firstName, SecondName + dispatch) и
        // из putActionsToProps (changeFirstName, changesecondName)
        const { firstName, secondName, changeFirstName, changeSecondName } = this.props;
        return (
            <div>
                <div>
                    <input 
                        type="text" 
                        value={this.props.firstName} 
                        placeholder="First Name" 
                        onChange={(event) => {
                            changeFirstName(event.target.value);    // вызов reducer через ActionCreater
                        }}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={this.props.secondName} 
                        placeholder="Second Name" 
                        onChange={(event) => {
                            changeSecondName(event.target.value);    // вызов reducer через ActionCreater
                        }}
                    />
                </div>

                <div>
                    {`${firstName} ${secondName}` }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {         // записывает данные из initialState в пропс компонента
    return {
        firstName: state.firstName,
        secondName: state.secondName
    };
};

const putActionsToProps = (dispatch) => {   // заносим actions в пропсы компонента
    return {
        changeFirstName: bindActionCreators(changeFirstName, dispatch),     // привязывает actions для пропсов
        changeSecondName: bindActionCreators(changeSecondName, dispatch)    // привязывает actions для пропсов
    };
}; 

const WrappedAppComponent = connect(mapStateToProps, putActionsToProps)(App);

export { WrappedAppComponent, store };


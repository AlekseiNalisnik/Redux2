import React from 'react';
import { bindActionCreators } from 'redux';
import { changeFirstName, changeSecondName } from '../store/actions';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps, putActionsToProps)(App);
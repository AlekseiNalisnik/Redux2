import { createStore } from 'redux';

const initialState = {      // изначальный store
    name: 'Paul',
    secondName: 'Petrov'
};

function reducer(state = initialState, action) {        // Вызывается всегда при вызове action
    switch(action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.payload };
        case 'CHANGE_SECOND_NAME':
            return {...state, secondName: action.payload };
    }
    return state;
}

const store = createStore(reducer);     // вызываемая функция reducer постоянно обновляет состояние приложения => store зависит от reducer

console.log(store.getState());    // Вызывает событие changeName, это вызывает reducer changeName === action

const changeName = {              // ACTION 1
    type: 'CHANGE_NAME',
    payload: 'Ivan'
};

const changeSecondName = {        // ACTION 2
    type: 'CHANGE_SECOND_NAME',
    payload: 'Ivanov'
};

stote.dispatch(changeName);       // Вызывает событие changeName, это вызывает reducer changeName === action
console.log(store.getState());    // Получает текущее состояние store
stote.dispatch(changeSecondName); // Вызывает событие changeName, это вызывает reducer changeName === action
console.log(store.getState());    // Получает текущее состояние store
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import firebase from "firebase";


// Firebaseの初期化
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
 // appId: "",
 // measurementId: ""
}

// Firebase初期化
var fireapp;
try {

    // Initialize Firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(config);
    }
} catch (error) {
    console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
    division     :'',
    division_day :'',
    login        : false,
    username     : 'ログイン',
    email        : '',
    userid       : 999
}

// レデューサー
function fireReducer (state = initial, action ) {
    switch (action.type) {
        // 選択された課名
        case 'DIVISION':
            return {
                division    :action.division
               ,division_day:action.division_day
           };
        // ユーザー認証
        case 'UPDATE_USER':
            return action.value;

        // デフォルト
        default:
            return state;
    }
}

// Redux Persistの設定
const persistConfig = {
    key: 'root',
    storage,
}

// パーシストレデューサーの作成
const persistedReducer = persistReducer( persistConfig, fireReducer)


// initSotre関数(redux-store.jsで必要)
export function initStore(state = initial) {
    return createStore(persistedReducer, state, applyMiddleware(thunkMiddleware))
}
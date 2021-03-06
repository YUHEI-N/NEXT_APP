import App, {Container} from 'next/app';
import React from 'react';
import withReduxStore from '../lib/redux-store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'

class _App extends App {
    render () {
        const {Component, pageProps, reduxStore} = this.props

        // ストア、パーシスターの作成
        let pstore = persistStore(reduxStore)

        return (
            <Container>
                <Provider store={reduxStore}>
                    <PersistGate loading="" persistor={ pstore }>
                        <Component {...pageProps} />
                    </PersistGate>
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(_App) 




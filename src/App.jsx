import React from 'react';
import AuthContainer from './components/AuthContainer';
import RegistrationContainer from './components/RegistrationContainer';
import rootReducer from './store/reducers';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(rootReducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h1>Complex State</h1>
                    <div>
                        <AuthContainer />
                        <RegistrationContainer />
                    </div>
                </div>
            </Provider>
        );
    }
}
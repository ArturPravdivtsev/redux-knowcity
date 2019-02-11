import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ChangeFirstName, ChangeSecondName } from '../store/actions';

class MainComponent extends React.Component {
    render () {
        const { firstName, secondName, changeFirstName, changeSecondName } = this.props;

        console.log(this.props);

        return  <div>
                    <div>
                        <input 
                            type = "text" 
                            value={firstName} 
                            placeholder="First Name"
                            onChange={(event) => {
                                changeFirstName(event.target.value);
                            }}
                        />
                    </div> 
                    <div>
                        <input 
                            type = "text" 
                            value={secondName} 
                            placeholder="Second Name"
                            onChange={(event) => {
                                changeSecondName(event.target.value);
                            }}
                        />
                    </div>
                    <div>{`${firstName} ${secondName}`}</div>
                </div>;
    }
}

const putStateToProps = (state) => {
    return {
        firstName: state.firstName,
        secondName: state.secondName
    };
};

const putActionsToProps = (dispatch) => {
    return {
        changeFirstName: bindActionCreators(ChangeFirstName, dispatch),
        changeSecondName: bindActionCreators(ChangeSecondName, dispatch)
    };
};


export default connect(putStateToProps, putActionsToProps)(MainComponent);
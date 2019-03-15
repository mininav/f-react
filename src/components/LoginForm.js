import { useForm, useField } from 'react-final-form-hooks';
import React from 'react';
import PropTypes from 'prop-types';
import Websocket from "../utils/Websocket";

LoginForm.propTypes = {
    websocket: PropTypes.instanceOf(Websocket).isRequired
};

function LoginForm({websocket}) {

    const onSubmit = values => {
        websocket.send({
            login: {
                name: values.name,
                password: values.password
            }
        });

    };

    const validate = values => {
      return {};
    };

    const {form, handleSubmit, values, pristine, submitting} = useForm({onSubmit, validate});

    const name = useField("name", form);
    const password = useField("password", form);

    return(
        <form onSubmit={handleSubmit}>
            <h2>login</h2>
            <ul>
                <li><input {...name.input} /></li>
                <li><input type={"password"} {...password.input}/></li>
            </ul>
            <button type={"submit"}>submit</button>
        </form>
    )

}

export default LoginForm;
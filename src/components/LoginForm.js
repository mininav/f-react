import { useForm, useField } from 'react-final-form-hooks';
import React from 'react';

function LoginForm(props) {

    const onSubmit = values => {
        props.ws.send({
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
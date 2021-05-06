import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required } from '../../utils/validators/validators'
import { createField ,Input, Textarea } from '../common/FormsControls/FormsControls'
import styles from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = (props) =>{
    return (   
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} 
                validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} 
                type={"password"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} 
                type={"checkbox"} />запомнить меня
            </div>

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && createField("Symbols from image","captcha",[required], Input, {})
            }

            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
        )
}

const LoginReduxForm=reduxForm({
    form:'login'
})(LoginForm)

const Login = (props) =>{
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps=(state)=>({
    captchaUrl:state.auth.captchaUrl,
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login)
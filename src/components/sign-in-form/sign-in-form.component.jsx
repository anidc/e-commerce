import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss"

const defaultFormFields = {
    email: "",
    password: "",
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password.length <= 0 || email.length <= 0) {
            alert("Please enter the required fields")
        } else if (password.length < 6) {
            alert("password should be longer")
        } else {
            try {
                await signInAuthUserWithEmailAndPassword(email, password)
                resetFormFields()
            } catch (error) {
                alert(error.code)
            }
        }
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopup()
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-in-form">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and passsword</span>
            <form className="form-container" >
                <FormInput label="Email" type="text" required name="email" value={email} onChange={handleChange} />
                <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange} />
            </form>
            <div className="buttons">
                <Button type="submit" onClick={handleSubmit} buttonType="inverted">Sign in</Button>
                <Button type="button" onClick={logGoogleUser} buttonType="google">Google sign in</Button>
            </div>
        </div>
    )
}
export default SignInForm;
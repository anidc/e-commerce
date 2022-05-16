import { useState } from "react"
import "./sign-up-form.styles.scss"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confrimPassword: "",
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confrimPassword } = formFields;

    const resetFromFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confrimPassword) {
            alert("passwords do not match")
            return;
        }
        if (password.length < 6 || confrimPassword.length < 6) {
            alert("Password should be at least 6 characters")
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            resetFromFields()
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use")
            } else {
                console.log("User creation encoutered an error", error.message)
            }
        } finally {

        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }


    return (
        <div>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and passsword</span>
            <form className="form-container" onSubmit={handleSubmit}>
                <FormInput label="Display name" type="text" required name="displayName" value={displayName} onChange={handleChange} />
                <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange} />
                <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange} />
                <FormInput label="Confirm password" type="password" required name="confrimPassword" value={confrimPassword} onChange={handleChange} />
            </form>
            <Button type="submit">Sign up</Button>
        </div>
    )
}

export default SignUpForm;
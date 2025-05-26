import { AuthForm } from '../components/AuthForm/AuthForm'

export const SignInPage = ({ setIsAuth }) => {
    return <AuthForm setIsAuth={setIsAuth} isSignUp={false} />
}
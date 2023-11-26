import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import loginImage from "/assets/loginImage.png"
import { useEffect, useState } from "react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "../components/ui/checkbox"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

const EMAIL_REGEX =
  /^(?=.{1,256}$)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?!-)(?!.*-)[a-zA-Z0-9-]+(?<!-)(\.[a-zA-Z0-9-]+)*(?<!-)$/

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const canSubmitForm = email && password ? true : false

  const onEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const onPasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)
  const onRememberMeChanged = () => setRememberMe((prev) => !prev)

  useEffect(() => {
    if (email) {
      setIsEmailValid(EMAIL_REGEX.test(email))
    }
  }, [email])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!canSubmitForm) return
    console.log({
      email,
      password,
      rememberMe,
    })
  }

  return (
    <section className="px-8 py-6 xl:px-60 flex items-center h-screen md:gap-6 lg:gap-10 xl:gap-x-24 max-xl:gap-28">
      <div className="md:block hidden w-[50%]">
        <img src={loginImage} alt="login-image" />
      </div>
      <Card className="md:w-[50%] w-full py-8">
        <CardHeader>
          <CardTitle className="sm:text-5xl text-3xl text-primary font-semibold text-center">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-1">
            <div>
              <Label htmlFor="email" className="sm:text-lg text-sm">
                Email
              </Label>
              <Input
                className={`mt-1 text-xs sm:text-sm ${
                  !isEmailValid ? "focus-visible:ring-red-600" : ""
                }`}
                type="email"
                value={email}
                onChange={onEmailChanged}
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <Label htmlFor="password" className="sm:text-lg text-sm">
                Password
              </Label>

              <Input
                className="mt-1 text-xs sm:text-sm"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={onPasswordChanged}
                id="password"
                placeholder="Password"
              />
              {!showPassword ? (
                <EyeIcon
                  onClick={() => setShowPassword(true)}
                  className="absolute sm:right-3 sm:bottom-[6px] cursor-pointer text-gray-500 w-5 h-5 right-2 bottom-3 sm:w-7 sm:h-7 "
                />
              ) : (
                <EyeOffIcon
                  onClick={() => setShowPassword(false)}
                  className="absolute sm:right-3 sm:bottom-[6px] cursor-pointer text-gray-500 w-5 h-5 right-2 bottom-3 sm:w-7 sm:h-7 "
                />
              )}
            </div>
            <div className="sm:flex sm:flex-row flex flex-col mt-3 gap-4">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={rememberMe}
                  onCheckedChange={onRememberMeChanged}
                  id="remember-me"
                />
                <Label className="text-sm sm:text-base" htmlFor="remember-me">
                  Remember Me
                </Label>
              </div>
              <Link
                to="forgot-password"
                className="sm:text-sm text-xs sm:ml-auto mx-auto sm:mx-0 hover:underline text-primary"
              >
                Forgot Password
              </Link>
            </div>
            <div className="mt-6">
              <Button disabled={!canSubmitForm} className="w-full text-base">
                Log in
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col sm:flex-row gap-2 sm:text-sm text-xs text-gray-500">
            <p>Not have any account?</p>
            <Link className="text-primary hover:underline" to="register">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
export default Login

import { Link } from "react-router-dom"
import Card from "../../components/Card"
import Button from "../Button"
import Input from "../../components/Input"


const Login = () => {

  return (
    <div className="w-full h-screen grid place-items-center">
        <Card title="Login">
            <div className="mt-12 px-4">
                <div className="mb-4">
                    <Input id="credentials">Username atau Password</Input>
                </div>
                <div className="mb-4">
                    <Input id="password" type="password">Password</Input>
                </div>

                <div className="mb-4">
                    <Button>Login</Button>
                    <p className="text-center mt-3 text-gray-700">Tidak memiliki akun ? <Link to="/register" className="text-blue-600">daftar sekarang</Link></p>
                </div>

            </div>
        </Card>
    </div>
  )
}

export default Login
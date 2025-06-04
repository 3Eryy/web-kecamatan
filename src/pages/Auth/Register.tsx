import { Link } from "react-router-dom"
import Card from "../../components/Card"
import Button from "../Button"
import Input from "../../components/Input"


const Register = () => {

  return (
    <div className="w-full h-screen grid place-items-center">
        <Card title="Register">
            <div className="mt-12 px-4">
                <div className="mb-4">
                    <Input id="nik">NIK</Input>
                </div>
                <div className="mb-4">
                    <Input id="username">Username</Input>
                </div>
                <div className="mb-4">
                    <Input id="email" type="email">Email</Input>
                </div>
                <div className="mb-4">
                    <Input id="no_telepon">No Telepon</Input>
                </div>
                <div className="mb-4">
                    <Input id="password" type="password">Password</Input>
                </div>
                <div className="mb-4">
                    <Input id="konfirmasi_password" type="password">Konfirmasi Password</Input>
                </div>

                <div className="mb-4">
                    <Button>Register</Button>
                    <p className="text-center mt-3 text-gray-700">Sudah memiliki akun ? <Link to="/login" className="text-blue-600">login sekarang</Link></p>
                </div>

            </div>
        </Card>
    </div>
  )
}

export default Register
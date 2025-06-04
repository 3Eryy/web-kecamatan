import { Link, useNavigate } from "react-router-dom"
import Card from "../../components/Card"
import Button from "../Button"
import Input from "../../components/Input"
import { useState } from "react"
import axios from "axios"
import { API_URL } from "../../utils/helper"


const Login = () => {

    const [formData, setFormData] = useState({
        credentials : '',
        password : ''
    })

    const [buttonText, setButtonText] = useState('Login')
    const navigate = useNavigate()

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const input = e.target;
        setFormData({
            ...formData,
            [input.name]: input.value
        });

    }

    function handleLogin () {
        setButtonText('Loading...')
        axios.post(`${API_URL}/login`, formData)
        .then((res) => {
            localStorage.setItem('token',res.data?.token);
            navigate("/")
            
        })
        .catch(err => {
            console.log(err.response);
        })
        .finally(() => {
            setButtonText('Login')
            
        })
    }


    return (
    <div className="w-full h-screen grid place-items-center">
        <Card title="Login">
            <div className="mt-12 px-4">
                <div className="mb-4">
                    <Input id="credentials" onChange={handleInput} value={formData.credentials}>Username atau Password</Input>
                </div>
                <div className="mb-4">
                    <Input id="password" type="password" onChange={handleInput} value={formData.password}>Password</Input>
                </div>

                <div className="mb-4">
                    <Button onClick={handleLogin}>{buttonText}</Button>
                    <p className="text-center mt-3 text-gray-700">Tidak memiliki akun ? <Link to="/register" className="text-blue-600">daftar sekarang</Link></p>
                </div>

            </div>
        </Card>
    </div>
    )
}

export default Login
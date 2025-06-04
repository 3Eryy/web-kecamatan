import { Link, useNavigate } from "react-router-dom"
import Card from "../../components/Card"
import Button from "../Button"
import Input from "../../components/Input"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL, getToken } from "../../utils/helper"


const Register = () => {
  const [formData, setFormData] = useState({
    nik: "",
    username: "",
    email: "",
    no_telepon: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonText, setButtonText] = useState("Register");
  const [canClick, setCanClick] = useState(false);
  const navigate = useNavigate();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === "konfirmasi_password") {
      setConfirmPassword(value);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  useEffect(() => {
    if (
      formData.password.length > 0 &&
      confirmPassword.length > 0 &&
      formData.password === confirmPassword
    ) {
      setCanClick(true);
    } else {
      setCanClick(false);
    }
  }, [formData.password, confirmPassword]);

  function handleRegister() {
    setButtonText("Loading...");
    axios
      .post(`${API_URL}/register`, formData, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setButtonText("Register");
      });
  }

  return (
    <div className="w-full h-screen grid place-items-center">
        <Card title="Register">
            <div className="mt-12 px-4">
                <div className="mb-4">
                    <Input onChange={handleInput} id="nik">NIK</Input>
                </div>
                <div className="mb-4">
                    <Input onChange={handleInput} id="username">Username</Input>
                </div>
                <div className="mb-4">
                    <Input onChange={handleInput} id="email" type="email">Email</Input>
                </div>
                <div className="mb-4">
                    <Input onChange={handleInput} id="no_telepon">No Telepon</Input>
                </div>
                <div className="mb-4">
                    <Input onChange={handleInput} id="password" type="password">Password</Input>
                </div>
                <div className="mb-4">
                    <Input onChange={handleInput} id="konfirmasi_password" type="password">Konfirmasi Password</Input>
                    {!canClick && 
                        <p className="text-red-600 text-sm">Password Tidak Sama!</p>
                    }
                </div>

                <div className="mb-4">
                    <Button onClick={handleRegister} disabled={!canClick}>{buttonText}</Button>
                    <p className="text-center mt-3 text-gray-700">Sudah memiliki akun ? <Link to="/login" className="text-blue-600">login sekarang</Link></p>
                </div>

            </div>
        </Card>
    </div>
  )
}

export default Register
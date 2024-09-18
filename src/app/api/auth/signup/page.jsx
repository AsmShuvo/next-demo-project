"use client";

import axios from "axios";

const RegisterPage = async () => {

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("Called");
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value, // Get the selected role value
        }
        console.log("new user : ", newUser);
        const res = await axios.post("http://localhost:3000/api/auth/signup/new-user", newUser);
        console.log(res.data);
    }

    return (
        <div className="p-10">
            <h4>Register page</h4>
            <form onSubmit={handleRegister} className="flex flex-col gap-8 w-1/3 mx-auto">
                <input type="email" name="email" placeholder="Your email here" />
                <input type="password" name="password" placeholder="Password" />
                <input type="text" name="name" placeholder="Your name here" />

                <select name="role" className="p-2 border rounded">
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                </select>

                <button type="submit" className="btn btn-sm">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;

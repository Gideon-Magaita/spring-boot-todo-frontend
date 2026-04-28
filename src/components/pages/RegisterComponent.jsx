import React, { useState } from 'react';
import { registerUser } from '../services/AuthService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formErrors = {};

        if (!name.trim()) formErrors.name = "Full name is required";
        if (!username.trim()) formErrors.username = "Username is required";
        if (!email.trim()) formErrors.email = "Email is required";
        if (!password.trim()) formErrors.password = "Password is required";

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            const registerObj = { name, username, email, password };

            try {
                setLoading(true);

                const response = await registerUser(registerObj);
                console.log("Server Response:", response.data);

                // ✅ SUCCESS TOAST
                toast.success("User registered successfully!");

                // Reset form
                setName('');
                setUsername('');
                setEmail('');
                setPassword('');
                setErrors({});

                // ✅ AUTO REDIRECT AFTER 2 SECONDS
                setTimeout(() => {
                    navigate('/login');
                }, 2000);

            } catch (error) {
                console.error(error);

                if (error.response && error.response.data) {
                    toast.error(error.response.data.message || "Registration failed");
                } else {
                    toast.error("Network error. Try again.");
                }
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5 shadow">
                        <div className="card-header text-center bg-primary text-white">
                            <h4>User Registration</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                {/* Full Name */}
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name && 'is-invalid'}`}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='Enter your full name'
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>

                                {/* Username */}
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.username && 'is-invalid'}`}
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder='Enter username'
                                    />
                                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email && 'is-invalid'}`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter email'
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>

                                {/* Password */}
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${errors.password && 'is-invalid'}`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Enter password'

                                    />
                                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>

                                {/* Submit */}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? "Registering..." : "Register"}
                                    </button>
                                </div>

                            </form>
                        </div>

                        <div className="card-footer text-center">
                            <small>
                                Already have an account?{" "}
                                <span
                                    style={{ cursor: 'pointer', color: 'blue' }}
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponent;
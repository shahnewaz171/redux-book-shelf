import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { useHistory, useLocation } from 'react-router';
import { useAuth } from "../../utilities/auth";

const Login = ({ closeModal }) => {
    const [logIn, setLogIn] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();
    const location = useLocation();
    const { handleGoogleSignIn, createEmailWithPassword,  signInEmailPassword } = useAuth();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        mode: "all", 
        reValidateMode: 'onChange'
    });
    const password = useRef();
    password.current = watch('password');

    const handleBlur = (e) => {
        const userInfo = { ...user };
        userInfo[e.target.name] = e.target.value;
        setUser({ ...userInfo })
    }

    let { from } = location.state || { from: { pathname: "/" }};

    const onSubmit = data => {
        if(!logIn && user.email && user.password){
            createEmailWithPassword(user.email,  user.password)
            .then(res => {
                if(res){
                    setLogIn(!user);
                }
            })
        }
        else if(logIn && user.email && user.password){
            signInEmailPassword(user.email, user.password)
            .then(res => {
                if(res){
                    history.replace(from);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    };


    return (
        <>
            <h3 className="text-center text-primary">{logIn ? "Login Form" : "Signup Form"}</h3>
            <div className="p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {logIn ?
                        <>
                            <div className="form-group mb-3">
                                <input type="email" {...register("email", { required: true })} onBlur={(e) =>  handleBlur(e)} name="email" placeholder="Enter Email" className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" {...register("password", { required: true })} onBlur={(e) =>  handleBlur(e)} name="password" placeholder="Enter Password" className="form-control" />
                                {errors.password && errors.password.type === "required" && <span className="text-danger">This field is required</span>}
                            </div>
                        </>
                        :
                        <>
                            <div className="form-group mb-3">
                                <input type="text" {...register("name", { required: true })} onBlur={(e) =>  handleBlur(e)} name="name" placeholder="Enter Name" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group mb-3">
                                <input type="email" {...register("email", { required: true })} onBlur={(e) =>  handleBlur(e)} name="email" placeholder="Enter Email" className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" {...register("password", { required: true, minLength: 6 })} onBlur={(e) =>  handleBlur(e)} name="password" placeholder="Enter Password" className="form-control" />
                                {errors.password && errors.password.type === "required" && <span className="text-danger">This field is required</span>}
                                {errors.password && errors.password.type === "minLength" &&<span className="text-danger">Please enter at least 6 characters</span>}
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" {...register("c_password", { required: true, validate: (value) => value === password.current })} onBlur={(e) =>  handleBlur(e)} name="c_password" placeholder="Confirm Password" className="form-control" />
                                {errors.c_password && errors.c_password.type === "required" && <span className="text-danger">This field is required</span>}
                                {errors.c_password && errors.c_password.type === "validate" && <span className="text-danger">Password does not match</span>}
                            </div>
                        </>
                    }
                    <input type="submit" className="btn btn-primary btn-focus" value={logIn ? "Login" : "Register"} />
                </form>
                {logIn ?
                   <p className="mt-2">
                        Don't have an account? <span onClick={() => {reset(); setLogIn(!logIn)}} className="text-primary    text-decoration-underline cursor">Signup</span>
                    </p>
                    :
                    <p className="mt-2">
                        Already registered? <span onClick={() => {reset(); setLogIn(!logIn)}} className="text-primary text-decoration-underline cursor">Login</span>
                    </p>
                }
                <div className="text-center">
                    <button onClick={handleGoogleSignIn}  className="btn border border-1 border-primary rounded-pill text-black mt-3 btn-focus"><BsGoogle /> Continue with Google</button>
                </div>
            </div>
        </>
    );
};

export default Login;
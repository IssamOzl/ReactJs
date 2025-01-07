import React from "react";
import {useForm} from "react-hook-form";

export default function HookForm(){
    const { register, handleSubmit, setError, formState: { errors,isSubmitting } } = useForm();
    
    const onSubmit = async (data) => {
        try {
            await new Promise((resolve)=> setTimeout(resolve,2000))
            throw new Error;
        } catch (error) {
            setError(
                "email",
                {
                    message:'Email already taken'
                })
        }
        
    }
    //console.log(watch("Email")); // watch input value by passing the name of it
    console.log(errors)
    return(
        <div className="container">
            <form className="form-inline" onSubmit={handleSubmit(onSubmit )}>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input 
                        {...register("email",{
                            //required:true,
                            required:"email is required",
                            minLength: {
                                value: 5,
                                message: 'Email must be at least 5 characters long'
                              },
                            validate: (val)=>{
                                if(val.includes("@")){
                                    return true
                                } 
                                return "Email must contain @"    
                            } ,
                        })}
                        type="text" 
                         className="form-control" 
                        placeholder="Email" 
                        aria-describedby="helpId"
                    />
                    {errors.email && <small id="helpId" className="text-muted">{errors.email.message }</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input 
                        {...register("password",{
                           // required:true,
                            required:"Password is required",
                        })
                        }
                        type="text" 
                        className="form-control" 
                        placeholder="Password" 
                        aria-describedby="helpId"
                    />
                    {errors.password && <small id="helpId" className="text-muted">{errors.password.message }</small>}

                </div>
                <button disabled={isSubmitting} type="submit" className="btn btn-primary my-4" value="Login">
                    {isSubmitting? "LOADING ...." : "Login"}
                </button>
            </form>
        </div>
    )
}
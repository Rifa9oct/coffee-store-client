import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const {creatUser} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        creatUser(email,password)
        .then(result =>{
            console.log(result.user);

            //new user has been created
            const createdAt = result.user?.metadata?.creationTime;
            const user = {email, createdAt};
            fetch("https://coffee-store-server-gzz93wejl-kohinur-akthers-projects.vercel.app/users",{
                method:"POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire(
                        'Great!',
                        'User added to the database.',
                        'success'
                      )
                }
            })
        })
        .catch(error =>{
            console.log(error);
        })
        form.reset();
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center font-bold">Sign Up !</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
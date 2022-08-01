import 'bootstrap/dist/css/bootstrap.css';

function SignInForm(){
    return (
        <div className = "container">
            <div className = "col-12 col-lg-6 col-xl-4">
            <form>
                <div className="form-outline mb-4">
                    <p className = "fs-4 ">SIGN IN</p>
                    <input type="email" id="form1Example13" className="form-control form-control-lg mt-3" />
                    <label className="form-label" for="form1Example13">Email address</label>
                </div>
   
                <div className="form-outline mb-4">
                    <input type="password" id="form1Example23" className="form-control form-control-lg" />
                    <label className="form-label" for="form1Example23">Password</label>
                </div>

                <div class="d-flex justify-content-around align-items-center mb-4">           
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                        <label className="form-check-label" for="form1Example3"> Remember me </label>
                    </div>
                    <a href="#!">Forgot password?</a>
                </div>
 
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a className="btn btn-primary btn-lg btn-block mb-2"  href="#!" role="button">
                    <i className="fab fa-facebook-f me-2 "></i>Continue with Facebook
                </a>
                <br></br>
                <a className="btn btn-primary btn-lg btn-block"  href="#!" role="button">
                    <i className="fab fa-twitter me-2"></i>Continue with Twitter
                </a>
            </form>
            </div>         
        </div>
    );
}
export default SignInForm;
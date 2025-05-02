import React from "react";

export default function Login() {
  return (
    <>
      <div className="page-loader">
        <div className="bg-primary"></div>
      </div>

      <div className="authentication-wrapper authentication-1 px-4 ">
        <div className="authentication-inner py-5 ">
          <div className="d-flex justify-content-center align-items-center">
            <h2 className="text-center mb-4">PETROMAXX</h2>
            <div className="ui-w-60">
              <div className="w-100 position-relative"></div>
            </div>
          </div>

          <form className="my-5">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="text" className="form-control" />
              <div className="clearfix"></div>
            </div>
            <div className="form-group">
              <label className="form-label d-flex justify-content-between align-items-end">
                <span>Password</span>
                <a
                  href="pages_authentication_password-reset.html"
                  className="d-block small"
                >
                  Forgot password?
                </a>
              </label>
              <input type="password" className="form-control" />
              <div className="clearfix"></div>
            </div>
            <div className="d-flex justify-content-between align-items-center m-0">
              <label className="custom-control custom-checkbox m-0">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">Remember me</span>
              </label>
              <button type="button" className="btn btn-primary">
                Sign In
              </button>
            </div>
          </form>

          <div className="text-center text-muted">
            Don't have an account yet?
            <a href="pages_authentication_register-v1.html">Sign Up</a>
          </div>
        </div>
      </div>
    </>
  );
}

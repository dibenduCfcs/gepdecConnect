import "./Login.css";

export default function Login() {
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="login-page">
      <section className="form-card">
        <div className="brand-header">
          <img
            className="brand-logo"
            src="https://www.gepdec.in/favicon.ico"
            alt="Gepdec logo"
          />
          <p className="brand-name">Gepdec</p>
        </div>
        <h1>Sign in to Dashboard</h1>
        <p className="subtitle">Enter your details below to continue.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <div className="form-meta">
            <label className="remember-me">
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signup-link">
          Don&apos;t have an account? <a href="#">Sign up</a>
        </p>
      </section>
    </main>
  );
}

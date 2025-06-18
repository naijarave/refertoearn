import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call API to register user with referral code
    alert("Account created! Implement backend to handle registration.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Referral Code (optional)"
        value={referral}
        onChange={e => setReferral(e.target.value)}
      />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignUp;

/* REFER2EARN/
├── index.html           (Home/Landing page)
├── signup.html          (Sign Up page)
├── login.html           (Login page)
├── dashboard.html       (User Dashboard)
├── about.html           (About/FAQ page)
├── confirm.html         (Confirmation page)
├── css/
│   └── style.css        (Main stylesheet)
└── js/
    └── main.js          (Main JavaScript) */
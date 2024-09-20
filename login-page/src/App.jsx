import Input from "./components/Input"
import "../src/App.css"

function App() {

  return (
    <div className="container">
      <div className="login-area">
        <h2>Login</h2>
        <Input title="Username" img="../src/assets/icons8-user-64.png" placeholder="Type your username" type="text" />
        <Input title="Password" img="../src/assets/icons8-lock-50.png" placeholder="Type your password" type="password" />
        <span className="forgot">Forgot password?</span>
        <button className="login-btn">Login</button>
      </div>
    </div>
  )
}

export default App

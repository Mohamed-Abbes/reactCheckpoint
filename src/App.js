
function App() {
  return(
   <div className="App border border-black border-2 w-25 p-3 position-absolute top-50 start-50 translate-middle" >
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">E-mail address or Username</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Keep me logged in</label>
      </div>
      <button type="submit" class="btn btn-primary">Log-in</button>
    </form>
   </div>
  )

}

export default App;

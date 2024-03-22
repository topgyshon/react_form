import { useState } from "react"

const Form = ()=>{

  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState("")

  const handleEmail = (e)=>{
      setEmail(e.target.value)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
}

//to prevent reload of broswer when submit button click
  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log(email, password);
  }


  return (
    <>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Email</label>
            <br></br>
            <input name="email" placeholder="Your email" value= {email} type="email" 
            onChange={handleEmail}/>

          </div>

          <div className="form-control">
            <label>Password</label>
            <br></br>
            <input name="password" placeholder="Password" value= {password} type="password" 
            onChange={handlePassword}/>

          </div>
              <br />
            <button>Submit</button>

            <br />

            //just to see what is happening at the input
            <h1>
              Email: {email}
              <br />
              Password: {password}
            </h1>
        </form>


    </>
  )
}

export default Form
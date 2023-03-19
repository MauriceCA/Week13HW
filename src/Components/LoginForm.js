import React from 'react';


export default class LoginForm extends React.Component {
    render(){
        return(
        <div className="container-flex position-absolute top-50 start-50 translate-middle border border-warning rounded-3 border-4 p-5 bg-transparent">
                <h1>Log In</h1>

                <form className='p-2'>
                    <label for="Username" className='form-label'>Username:</label>
                    <input type={"text"} id="Username" name="Username" className='mb-3 p-1'></input> <br/>
                    <label for="Password" className='form-label'>Password:</label>
                    <input type={"password"} id="Password" name="Password"  className='mb-3 p-1'></input><br/>
                    <input className="btn btn-warning" type={"submit"} value="Submit"></input>
                </form>

        </div>
        )
    }
}
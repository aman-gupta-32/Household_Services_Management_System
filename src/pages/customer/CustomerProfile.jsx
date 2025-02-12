function CustomerProfile(){
    return(
        <div>
            <style>
                {
                    `
                        .input_value{
                            width:300px;
                        }
                    `   
                }
            </style>
            <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                </div>
            </nav>
        </div>
        <br />
        <div>
                <h1 style={{color:"green"}}>Profile</h1>
        </div>
        <div className="row">
            <div className="col-md-6 mx-auto" >
                <div className="card mt-5" style={{'border':'none'}}>
                    <div className="card-body text-center ">
                            <div style={{padding:"10%"}}>
                                <table className="table  table-borderless">
                                    <tbody >
                                    <tr>
                                        
                                        <td>Name: </td>
                                        <td>
                                            <input className="input_value" type="text" name="ProfileName" id="ProfileName" placeholder="Enter your Name"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        
                                        <td>Contact Details: </td>
                                    <td>
                                        <input className="input_value" type="text" name="ContactNumber" id="ContactNumber" placeholder="Enter your Contact Details"/>
                                    </td>
                                    </tr>
                                    <tr>
                                        
                                        <td>Email: </td>
                                        <td>
                                            <input className="input_value" type="text" name="Email" id="Email" placeholder="Enter your Email address"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        
                                        <td>Address: </td>
                                        <td>
                                            <input className="input_value" type="text" name="Address" id="Address" placeholder="Enter your Address" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <input type="button" className="btn btn-primary" value="Submit"/>
                                        </td>
                                        <td>
                                        <a href="#">Forget Password?</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CustomerProfile
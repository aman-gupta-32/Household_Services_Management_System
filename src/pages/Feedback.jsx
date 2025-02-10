import { useNavigate } from "react-router-dom";




function Feedback(){
    const navigate = useNavigate();

    return(
        <div>
            <style>
                {`
                 .rating {
                    float:left;
                    border:none;
                    }
                .rating:not(:checked) > input {
                    position:absolute;
                    top:-9999px;
                    clip:rect(0, 0, 0, 0);
                    }
                .rating:not(:checked) > label {
                    float:right;
                    width:1em;
                    padding:0 .1em;
                    overflow:hidden;
                    white-space:nowrap;
                    cursor:pointer;
                    font-size:200%;
                    line-height:1.2;
                    color:#ddd;
                }
                .rating:not(:checked) > label:before {
                    content:'★ ';
                }
                .rating > input:checked ~ label {
                    color: #f70;
                }
                .rating:not(:checked) > label:hover, .rating:not(:checked) > label:hover ~ label {
                    color: gold;
                }
                .rating > input:checked + label:hover, .rating > input:checked + label:hover ~ label, .rating > input:checked ~ label:hover, .rating > input:checked ~ label:hover ~ label, .rating > label:hover ~ input:checked ~ label {
                    color: #ea0;
                }
                .rating > label:active {
                    position:relative;
                }
                `}
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
                <h1 style={{color:"green"}}>Rate your Experience</h1>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card mt-5">
                        <div className="card-body text-center">
                            <div className="">
                                <fieldset class="rating">
                                <h3>Your rating :</h3>
                                <input type="radio" id="star5" name="rating" value="5" />
                                <label for="star5">5 stars</label>
                                <input type="radio" id="star4" name="rating" value="4" />
                                <label for="star4">4 stars</label>
                                <input type="radio" id="star3" name="rating" value="3" />
                                <label for="star3">3 stars</label>
                                <input type="radio" id="star2" name="rating" value="2" />
                                <label for="star2">2 stars</label>
                                <input type="radio" id="star1" name="rating" value="1" />
                                <label for="star1">1 star</label>
                                </fieldset>
                            </div>
                        </div>
                        <div>
                            <textarea id="textareaForReview" name="textareaForReview" rows="6" cols="50" placeholder="Enter review here"></textarea>
                            <br/>
                            <br />
                            <input onClick={()=>navigate("/services")} type="submit" value="Submit" style={{backgroundColor:"black", color:"white"}}/>
                            <br />
                            </div>
                    </div>
                </div>
            </div>

        <div>
            
            
        </div>
        </div>
    )
}

export default Feedback;
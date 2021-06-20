import React from "react";
function login(){
    <a href='Fishing.jsx'/>
}

function Login(){
    return(
        <div className="App">
    <h3 class="display-5 text-center mt-5 mb-5 animate__animated animate__bounceInDown">Ready to Play?</h3>
    <form class="col-sm-12 col-md-12 col-lg-11" action="/your_game" method="post" autocomplete="off">
               
                <div class="form-row mb-30 animate__animated animate__fadeInLeft">
                    <label class="col-lg-6 col-md-6 col-sm-12 text-white " style={{fontSize:"25px" }}>
                        Game Code
                    </label>
                    <div class="col-lg-6 col-md-6 col-sm-12" id="game_code"><input type="text" name="game_code" placeholder="Enter Game Code" maxlength="20" required="" id="id_game_code"/>

                    </div>
                </div>
                <div class="form-row mb-30 animate__animated animate__fadeInRight">
                    <label class="col-6 col-md-6 col-sm-12 text-white" style={{fontSize:"25px" }} >
                        Nick Name
                    </label>
                    <div class="col-lg-6 col-md-6 col-sm-12"><input type="text" name="nick" placeholder="Enter nick name" maxlength="20" required="" id="id_nick"/></div>
                </div>
                <strong class="text-dark"></strong>
                 
                <hr style={{background: "white", height: "1px", marginTop: "50px"}} />
                <button  href="Fishing.jsx" class="btn btn-md play-red-button text-white mt-30 animate__animated animate__bounceInUp animate__slow" type="submit" name="button"  style={{marginRight: "30px", marginBottom: "40px" ,float: "right"}} onClick={Login}>
                    Join
                </button>
                
            </form>

           
      
    </div>

    );

};

export default Login;
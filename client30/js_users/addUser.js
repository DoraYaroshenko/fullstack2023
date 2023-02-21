import { API_URL } from "../services/apiService.js";

const init = () => {
declareEvents();
}

const declareEvents = () => {
    let form = document.querySelector("#id_form");
    form.addEventListener("submit", (e)=> {
        e.preventDefault();
        console.log("form works");
        let bodyData = {
            name:document.querySelector("#id_name").value,
            email:document.querySelector("#id_email").value,
            password:document.querySelector("#id_password").value
        }
        console.log(bodyData);
        addUser(bodyData);
    })
}

const addUser = async(_bodyData)=>{
    let url = API_URL+"/users";
    try{
        let resp = await axios({
            method:"POST",
            url:url,
            data: _bodyData
        })
        console.log(resp.data);
        if(resp.data._id){
            alert("You've signed up successfully");
        }
    }
    catch(err){
        console.log(err);
        alert("There is a problem");
    }
   
}

init();
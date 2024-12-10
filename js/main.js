


// ////////////////////////////////////////////////START///////////////////////////////////////////////////
// ///////////////////////////////inputs/////////////////////////////////
var Email = document.getElementById('Email')

var Name = document.getElementById('Name')


var Password = document.getElementById('Password')
var signup = document.getElementById('signup')

var Logout = document.getElementById('Logout')
var welcom = document.getElementById('welcom')

// ///////////////////////////
var signinEmail = document.getElementById('signinEmail')

var signinPassword = document.getElementById('signinPassword')
    // ////////////////////////////////////////////// base url ////////////////////////////////


var pathparts = location.pathname.split('/');

var baseURL = ''

for (var i = 0; i < pathparts.length - 1; i++) {

    baseURL += '/' + pathparts[i]
}


console.log(baseURL);

// /////////////////////////////////////home page/////////////////////////////////


var username = localStorage.getItem('sessionUsername')

if (username) {


    document.getElementById('username').innerHTML = "Welcome " + username
}

var signUpArray = []



if (localStorage.getItem('users') == null) {



    signUpArray = []



} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}




////////////////////////////////// check inputs ///////////////////////////////////////


function isEmpty() {


    if (Name.value == "" || Email.value == "" || Password.value == "") {
        return false
    } else {
        return true
    }

}



// ////////////////////////////////////////////check email /////////////////////////////////////
function isEmailExist() {

    for (var i = 0; i < signUpArray.length; i++) {

        if (signUpArray[i].email.toLowerCase() == Email.value.toLowerCase()) {

            return false
            
        }
    }
}





function signUp() {

    if (isEmpty() == false) {

        document.getElementById('True').innerHTML = '<span class="text-danger m-3">Write all inputs</span>'
        return false
    }
    // ///////////////////////////// all values as object///////////////////////////
    var signUp = {
        name: Name.value,

        email: Email.value,

        password: Password.value,

    }
    if (signUpArray.length == 0) {


        signUpArray.push(signUp)


        localStorage.setItem('users', JSON.stringify(signUpArray))


        document.getElementById('True').innerHTML = '<span class="text-success m-3">Success</span>'

        return true
    }
    if (isEmailExist() == false) {


        document.getElementById('True').innerHTML = '<span class="text-danger m-3"> This email exists</span>'


    } else {

        signUpArray.push(signUp)


        localStorage.setItem('users', JSON.stringify(signUpArray))



        document.getElementById('True').innerHTML = '<span class="text-success m-3">Success</span>'

    }


}




// ///////////////////////////////////////////// log in to the website//////////////////////////////////////
/////////////////////////// check inputs is empty ? or not //////////////////////////////////////
function isLoginEmpty() {



    if (signinPassword.value == "" || signinEmail.value == "") {
        return false

    } else {

        return true

    }
}

function login() {

    if (isLoginEmpty() == false) {


        document.getElementById('false').innerHTML = '<span class="text-danger m-3">Write all inputs</span>'

        return false
    }
    var password = signinPassword.value

    var email = signinEmail.value

    for (var i = 0; i < signUpArray.length; i++) {


        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {

            localStorage.setItem('sessionUsername', signUpArray[i].name)

            if (baseURL == '/') {
                location.replace('https://' + location.hostname + '/home.html')

            } else {
                location.replace(baseURL + '/home.html')

            }
        } else {
            document.getElementById('false').innerHTML = '<span class="p-2 text-danger">Email or password is incorrect</span>'

        }
    }

}




// ///////////////////////////// log out of the website///////////////////////////////
function logout() {

    localStorage.removeItem('sessionUsername')
    
}




// ////////////////////////////////////////////////END///////////////////////////////////////////////////
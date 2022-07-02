// get Element
$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)

// sign in and sign up
function btnChangeFormMain() {
    var btnSigninBox = $(".sign_form-main-btn-box-in"),
        btnSignupBox = $(".sign_form-main-btn-box-up"),
        btnSignin = $(".sign_form-main-btn-in"),
        btnSignup = $(".sign_form-main-btn-up"),
        form = $(".sign_form-main")
    signFormin = $(".sign_form-in")
    signFormup = $(".sign_form-up")

    // click btn to change form
    btnSignup.onclick = function () {
        form.classList.add("sign_form-main-change")
        btnSigninBox.classList.remove("opacity")
        btnSignupBox.classList.add("opacity")
        changeVariableColor("#f43648", "#03a9f4")
        signFormin.classList.add("sign_form-in-change")
        signFormup.classList.add("sign_form-up-change")
    }
    btnSignin.onclick = function () {
        form.classList.remove("sign_form-main-change")
        btnSigninBox.classList.add("opacity")
        btnSignupBox.classList.remove("opacity")
        changeVariableColor("#03a9f4", "#f43648")
        signFormin.classList.remove("sign_form-in-change")
        signFormup.classList.remove("sign_form-up-change")
    }
}

// Change color change variable func
function changeVariableColor(value1, value2) {
    document.documentElement.style.setProperty("--color-sign-change-1", value1);
    document.documentElement.style.setProperty("--color-sign-change-2", value2);
}

// RunCode
// runCode signin sign up
btnChangeFormMain()
// Validator sign in
Validator({
    form: ".sign_form-in",
    errorSelector: ".sign_form-message",
    rules: [
        Validator.isRequired("#fullname"),
        Validator.isRequired("#password")
    ]
})
// Validator sign up
Validator({
    form: ".sign_form-up",
    errorSelector: ".sign_form-message",
    rules: [
        Validator.isRequired("#fullname"),
        Validator.isRequired("#email"),
        Validator.isEmail("#email"),
        Validator.isRequired("#password"),
        Validator.minLength("#password", 6),
        Validator.isRequired("#password_confirmation"),
        Validator.isPasswordConfirmation("#password_confirmation", "#password", ".sign_form-up")
    ]
})

// onclick fb, google, forgot pw
$$(".sign_form-group-other-item").forEach(function (btn) {
    btn.onclick = () => {
        alert("Chả có gì đâu, ấn con cua nhé!!!!")
    }
})
$(".sign_form-forgetps").onclick = () => {
    alert("Chả có gì đâu, ấn con cua nhé!!!!")
}


// Data Slider Content
DataSlider = [

]


DataSlider

// Change Slider
function changeSlider(data) {

}

changeSlider(DataSlider)

$(".content-slider-btn-right").onclick = function () {
    // DataSlider.push($$(".content-slider-poster img")[0].getAttribute("src"))
    // DataSlider.push($$(".content-slider-poster img")[1].getAttribute("src"))
    // DataSlider.push($$(".content-slider-poster img")[2].getAttribute("src"))
    // DataSlider.push($$(".content-slider-poster img")[3].getAttribute("src"))
    // DataSlider.push($$(".content-slider-poster img")[4].getAttribute("src"))
    try {
        for (i in $$(".content-slider-page-item")) {
            if ($$(".content-slider-page-item")[4 - i] == $(".content-slider-page-item-active")) {
                $$(".content-slider-page-item")[4 - i].classList.remove("content-slider-page-item-active")
                $$(".content-slider-page-item")[5 - i].classList.add("content-slider-page-item-active")
                // if ($$(".content-slider-page-item")[4] == $(".content-slider-page-item-active")){
                //     console.log("a")
                //     $$(".content-slider-page-item")[1].classList.remove("content-slider-page-item-active")
                //     // $$(".content-slider-page-item")[0].classList.add("content-slider-page-item-active")
                // }
            }
        }
    }
    catch (err) {
        $$(".content-slider-page-item")[4].classList.remove("content-slider-page-item-active")
        $$(".content-slider-page-item")[0].classList.add("content-slider-page-item-active")
    }
    DataSlider = pushSrcPoster(DataSlider)
    $$(".content-slider-poster img")[0].setAttribute("src", DataSlider[1])
    $$(".content-slider-poster img")[1].setAttribute("src", DataSlider[2])
    $$(".content-slider-poster img")[2].setAttribute("src", DataSlider[3])
    $$(".content-slider-poster img")[3].setAttribute("src", DataSlider[4])
    $$(".content-slider-poster img")[4].setAttribute("src", DataSlider[0])
    DataSlider = []
}

$(".content-slider-btn-left").onclick = function () {
    // DataSlider.push($$(".content-slider-poster img")[0].getAttribute("src"))
    // DataSlider.push($$(".content-slider-poster img")[1].getAttribute("src"))
    // DataSlider.push($$(".content-slider-poster img")[2].getAttribute("src"))
    // DataSlider.push($$(".content-slider-poster img")[3].getAttribute("src"))
    // DataSlider.push($$(".content-slider-poster img")[4].getAttribute("src"))
    try {
        for (i in $$(".content-slider-page-item")) {
            if ($$(".content-slider-page-item")[i] == $(".content-slider-page-item-active")) {
                $$(".content-slider-page-item")[i].classList.remove("content-slider-page-item-active")
                $$(".content-slider-page-item")[i - 1].classList.add("content-slider-page-item-active")
            }
        }
    }
    catch (err) {
        $$(".content-slider-page-item")[0].classList.remove("content-slider-page-item-active")
        $$(".content-slider-page-item")[4].classList.add("content-slider-page-item-active")
    }

    DataSlider = pushSrcPoster(DataSlider)
    $$(".content-slider-poster img")[0].setAttribute("src", DataSlider[4])
    $$(".content-slider-poster img")[1].setAttribute("src", DataSlider[0])
    $$(".content-slider-poster img")[2].setAttribute("src", DataSlider[1])
    $$(".content-slider-poster img")[3].setAttribute("src", DataSlider[2])
    $$(".content-slider-poster img")[4].setAttribute("src", DataSlider[3])
    DataSlider = []
}
function pushSrcPoster(DataSlider) {
    for (var i = 0; i <= 4; ++i) {
        DataSlider.push($$(".content-slider-poster img")[i].getAttribute("src"))
    }
    return DataSlider
}

$$(".content-slider-page-item").forEach(function (item, index) {
    item.onclick = function () {
        for (i in $$(".content-slider-page-item")) {
            if ($$(".content-slider-page-item")[i] == $(".content-slider-page-item-active")) {
                var distance = index - i

                if (distance > 0) {
                    DataSlider = pushSrcPoster(DataSlider)
                    var par0 = 0 + distance >= 5 ? (0 + distance - 5) : (0 + distance)
                    var par1 = 1 + distance >= 5 ? (1 + distance - 5) : (1 + distance)
                    var par2 = 2 + distance >= 5 ? (2 + distance - 5) : (2 + distance)
                    var par3 = 3 + distance >= 5 ? (3 + distance - 5) : (3 + distance)
                    var par4 = 4 + distance >= 5 ? (4 + distance - 5) : (4 + distance)
                    $$(".content-slider-poster img")[0].setAttribute("src", DataSlider[par0])
                    $$(".content-slider-poster img")[1].setAttribute("src", DataSlider[par1])
                    $$(".content-slider-poster img")[2].setAttribute("src", DataSlider[par2])
                    $$(".content-slider-poster img")[3].setAttribute("src", DataSlider[par3])
                    $$(".content-slider-poster img")[4].setAttribute("src", DataSlider[par4])
                    DataSlider = []
                }
                else{
                    DataSlider = pushSrcPoster(DataSlider)
                    var par0 = 0 - distance >= 5 ? (0 - distance - 5) : (0 - distance)
                    var par1 = 1 - distance >= 5 ? (1 - distance - 5) : (1 - distance)
                    var par2 = 2 - distance >= 5 ? (2 - distance - 5) : (2 - distance)
                    var par3 = 3 - distance >= 5 ? (3 - distance - 5) : (3 - distance)
                    var par4 = 4 - distance >= 5 ? (4 - distance - 5) : (4 - distance)
                    $$(".content-slider-poster img")[0].setAttribute("src", DataSlider[par3])
                    $$(".content-slider-poster img")[1].setAttribute("src", DataSlider[par4])
                    $$(".content-slider-poster img")[2].setAttribute("src", DataSlider[par0])
                    $$(".content-slider-poster img")[3].setAttribute("src", DataSlider[par1])
                    $$(".content-slider-poster img")[4].setAttribute("src", DataSlider[par2])
                    DataSlider = []
                }
            }
        }
        $(".content-slider-page-item-active").classList.remove("content-slider-page-item-active")
        item.classList.add("content-slider-page-item-active")

    }
})

// Content Main Sub Slider
// $$(".content-main-sub-song-box")
$$(".content-main-option-part-slider-item").forEach(function(item, index){
    item.onclick = function(){
        $(".content-main-option-part-slider-item-active").classList.remove("content-main-option-part-slider-item-active")
        $(".content-main-sub-song-box-active").classList.remove("content-main-sub-song-box-active")
        item.classList.add("content-main-option-part-slider-item-active")
        $$(".content-main-sub-song-box")[index].classList.add("content-main-sub-song-box-active")
    }
})
function Validator(dataValidator) {
    // function handle validate
    function validate(input, ruleList) {
        for (i in ruleList) {
            // get element message contain input error
            var errorElement = input.parentElement.parentElement.querySelector(dataValidator.errorSelector)
            // get error message
            var errorMessage = ruleList[i].test(input.value)
            // inner to element and toggle class invalid
            if (errorMessage) {
                errorElement.innerText = errorMessage;
                input.classList.add("invalid")
                break
            } else {
                errorElement.innerText = "";
                input.classList.remove("invalid")
            }
        }
    }

    // onclick submit function
    function validateSubmit(submitBtn) {
        // onclick sign in
        submitBtn[0].onclick = function () {
            formElement = submitBtn[0].parentElement
            if (formElement) {
                selectorList = []
                dataValidator.rules.forEach(function (rule) {
                    selectorList.push(rule.selector)
                })
                selectorList.forEach(function (selector) {
                    var inputElement = formElement.querySelector(selector)
                    if (inputElement) {
                        rulesList = []
                        dataValidator.rules.forEach(function (rule) {
                            if (rule.selector == selector) {
                                rulesList.push(rule)
                            }
                        })
                        validate(inputElement, rulesList)
                    }
                })
            }
            var DataSignInList = []
            for (i in formElement.querySelectorAll(".sign_form-message")){
                if (formElement.querySelectorAll(".sign_form-message")[i].outerText == ""){
                    DataSignInList.push(formElement.querySelectorAll(".sign_form-message")[i].parentElement.querySelector(".input-box").querySelector("input").value)
                }
                else{
                    break
                }
            }
        }
        // onclick sign up
        submitBtn[1].onclick = function () {
            // check validate
            formElement = submitBtn[1].parentElement
            if (formElement) {
                selectorList = []
                dataValidator.rules.forEach(function (rule) {
                    selectorList.push(rule.selector)
                })
                selectorList.forEach(function (selector) {
                    var inputElement = formElement.querySelector(selector)
                    if (inputElement) {
                        rulesList = []
                        dataValidator.rules.forEach(function (rule) {
                            if (rule.selector == selector) {
                                rulesList.push(rule)
                            }
                        })
                        validate(inputElement, rulesList)
                    }
                })
            }
            var DataSignUpList = []
            var DataSignUpListO = {
                userName: "a",
                email: "a",
                password: "a"
            }
            for (i in formElement.querySelectorAll(".sign_form-message")){
                if (formElement.querySelectorAll(".sign_form-message")[i].outerText == ""){
                    DataSignUpList.push(formElement.querySelectorAll(".sign_form-message")[i].parentElement.querySelector(".input-box").querySelector("input").value)
                }
                else{
                    break
                }
            }
            DataSignUpListO.userName = DataSignUpList[0]
            DataSignUpListO.email = DataSignUpList[1]
            DataSignUpListO.password = DataSignUpList[2]
            console.log(DataSignUpListO)
        }
    }

            formElement = document.querySelector(dataValidator.form)
            if (formElement) {
                selectorList = []
                dataValidator.rules.forEach(function (rule) {
                    selectorList.push(rule.selector)
                })
                selectorList.forEach(function (selector, index) {
                    var inputElement = formElement.querySelector(selector)
                    if (inputElement) {
                        inputElement.onblur = function () {
                            rulesList = []
                            dataValidator.rules.forEach(function (rule) {
                                if (rule.selector == selector) {
                                    rulesList.push(rule)
                                }
                            })
                            validate(inputElement, rulesList)
                        }
                    }
                    inputElement.oninput = function () {
                        var errorElement = inputElement.parentElement.parentElement.querySelector(dataValidator.errorSelector)
                        errorElement.innerText = "";
                        inputElement.classList.remove("invalid")
                    }
                })
            }
            validateSubmit(document.querySelectorAll(".sign_form-submit"))
        }


// Rules Validator
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || "Please enter this field"
        }
    }
}
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var re = /\S+@\S+\.\S+/;
            return re.test(value) ? undefined : message || "please enter correct email"
        }
    }
}
Validator.isPasswordConfirmation = function (selector, valuePassword, formE, message) {
    return {
        selector: selector,
        test: function (value) {
            formElement = document.querySelector(formE)
            valueElement = formElement.querySelector(valuePassword)
            return value == valueElement.value ? undefined : message || "Re-entered password is incorrect"
        }
    }
}
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            if (value.length > 0) {
                return value.length >= min ? undefined : message || `Enter at least ${min} characters`
            }
        }
    }
}

function validateRegistration() {
    var regForm = document.reg;
    var firstname = regForm.fn;
    var lastname = regForm.ln;
    var pass = regForm.pass;
    var confirmPass = regForm.cpass;
    var gender = regForm.gen;
    var skills = regForm.skill;

    if (firstname.value.length < 4) {
        alert('Firstname must be morethan 4 characters');
        return false;
    }
    if (lastname.value.length < 3) {
        alert('Lastname must be atleast 3 character');
        return false;
    }
    if (pass.value.length < 8) {
        alert('Password must be morethan 8 characters');
        return false;
    }
    if (pass.value != confirmPass.value) {
        alert("Password & Confirm Password must be same");
        return false;
    }

    if (gender.value.length < 1) {
        alert('Gender should be selected');
        return false;
    }
    var flag = false;
    for (var i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            flag = true;
        }
    }
    if (flag == false) {
        alert('Atleast one skill must be selected');
        return false;
    }
    return true;
}
const form = document.getElementById("form");
const gender = document.getElementById("gender");
var Fristname = document.getElementById("Firstname");
var FristnameE = document.getElementById("FirstnameE");
function fristname() {
    if ((Fristname.value.length < 3) || (Fristname.value.length > 10)) {
        FristnameE.innerHTML = "Enter 3 to 10 letters";
        Fristname.style.borderColor = "red";
        return false;
    }
    FristnameE.innerHTML = " ";
    Fristname.style.borderColor = "green";
    return true;
}
var Lastname = document.getElementById("Lastname");
var LastnameE = document.getElementById("LastnameE");
function lastname() {
    if ((Lastname.value.length < 1) || (Lastname.value.length > 5)) {
        LastnameE.innerHTML = "Enter 1 to 5 letters";
        Lastname.style.borderColor = "red";
        return false;
    }
    LastnameE.innerHTML = " ";
    Lastname.style.borderColor = "green";
    return true;
}
var email = document.getElementById("email");
var EmailE = document.getElementById("EmailE");
function Email() {
    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        EmailE.innerHTML = "please enter a email";
        email.style.borderColor = "red";
        return false;
    }
    EmailE.innerHTML = " ";
    email.style.borderColor = "green";
    return true;
}
var MobileNo = document.getElementById("MobileNo");
var MobileNoE = document.getElementById("MobileNoE");
function phone() {
    if ((MobileNo.value.length > 10) || (MobileNo.value.length < 10)) {
        MobileNoE.innerHTML = "Enter 10 dighits mobile number";
        MobileNo.style.borderColor = "red";
        return false;
    }
    MobileNoE.innerHTML = " ";
    MobileNo.style.borderColor = "green";
    return true;
}
var Address = document.getElementById("Address");
var AddressE = document.getElementById("AddressE");
function address() {
    if (!Address.value.match(/^[A-Z a-z 0-9 .]*$/)) {
        AddressE.innerHTML = "Don't use special char";
        Address.style.borderColor = "red";
        return false;
    }
    AddressE.innerHTML = "";
    Address.style.borderColor = "green";
    return true;
}
var select = document.getElementById("select");
var selectE = document.getElementById("selectE");
function selectoption() {
    if (select.value == "-1") {
        selectE.innerHTML = "select state";
        select.style.borderColor = "red";
        return false;
    }
    selectE.innerHTML = " ";
    select.style.borderColor = "green";
    return true;
}
var Pinecode = document.getElementById("Pinecode");
var PinecodeE = document.getElementById("PinecodeE");

function pinecode() {
    if ((Pinecode.value.length > 6) || (Pinecode.value.length > 6)) {
        PinecodeE.innerHTML = "Enter 6 digits";
        Pinecode.style.borderColor = "red";
        return false;
    }
    PinecodeE.innerHTML = "";
    Pinecode.style.borderColor = "green";
    return true;
}
var District = document.getElementById("District");
var DistrictE = document.getElementById("DistrictE");
function district() {
    if (!isNaN(District.value)) {
        DistrictE.innerHTML = "Enter only alpha";
        District.style.borderColor = "red";
        return false;
    }
    DistrictE.innerHTML = "";
    District.style.borderColor = "green";
    return true;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    checkvalid();
});
function checkvalid() {

    const Fristnamevalue = Fristname.value;
    const Lastnamevalue = Lastname.value;
    const emailvalue = email.value;
    const MobileNovalue = MobileNo.value;
    const gendervalue = document.form.gender.value;
    const Addressvalue = Address.value;
    const selectvalue = select.value;
    const pincodevalue = Pinecode.value;
    const districtvalue = District.value;

    
    var gender = form.querySelectorAll('input[name="gender"]:checked');
    if (!gender.length) {
        alert('select Gender');
        return false;
    }
    var checkboxes = document.getElementsByName('check');
    var choose = "";
    var count = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            choose += checkboxes[i].value + "" + " and ";
            count++;
        }
    }
    if (count == 0) {
        alert('select language');
        return false;
    }
    document.write("Frist Name:" + Fristnamevalue + "<br>");
    document.write("Last Name:" + Lastnamevalue + "<br>");
    document.write("Email id:" + emailvalue + "<br>");
    document.write("Phone Number:" + MobileNovalue + "<br>");
    document.write("Gender:" + gendervalue + "<br>");
    document.write("Address:" + Addressvalue + "<br>");
    document.write("State:" + selectvalue + "<br>");
    document.write("Language:" + choose + "<br>");
    document.write("Pincode:" + pincodevalue + "<br>");
    document.write("District:" + districtvalue + "<br>");
}
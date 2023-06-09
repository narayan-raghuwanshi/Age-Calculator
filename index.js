
function calculateAge() {
    var dobInput = document.getElementById("dob").value;
    var dob = new Date(dobInput);
    var today = new Date();

    if (isNaN(dob)) {
      document.getElementById("result").innerHTML = "Please enter a valid date.";
      return;
    }

    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    document.getElementById("result").innerHTML = "Your age is: " + age;
  }
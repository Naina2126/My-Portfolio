function BMICalculate(){
    var age = document.getElementById("txtAge").value;
    var h = parseFloat(document.getElementById("txtHeight").value)/100;
    var w = parseFloat(document.getElementById("txtWeight").value);
    
    /*BMI CALCULATOR 
    h = height in m by using (m*m) 
    w = weight in kg
    BMI = weight/Math.pow(h,2)in metres
    */

    BMI = w / Math.pow(h,2);
    if(BMI < 18.5){
        document.getElementById("BmiValue").innerHTML = "Your BMI Value is <span class='fs-4 fw-bold text-secondary'>" +"&nbsp;" + Math.round(BMI) + "</span>";
    }else if(BMI < 24.9){
        document.getElementById("BmiValue").innerHTML = "Your BMI Value is <span class='fs-4 fw-bold text-success'>" +"&nbsp;" + Math.round(BMI) + "</span>";
    }else if(BMI < 29.9){
        document.getElementById("BmiValue").innerHTML = "Your BMI Value is <span class='fs-4 fw-bold text-warning'>" +"&nbsp;" + Math.round(BMI) + "</span>";
    }else{
        document.getElementById("BmiValue").innerHTML = "Your BMI Value is <span class='fs-4 fw-bold text-danger'>" +"&nbsp;" + Math.round(BMI) + "</span>";
    }
}
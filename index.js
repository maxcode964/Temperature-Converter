function calculateTemp(){
    const inputTemp=document.getElementById("temp").value;
    const tempSelected=document.getElementById("temp_d");
    const valueTemp=temp_d.options[tempSelected.selectedIndex].value;

    function celToFah(cel){
        let fahrenheit=((cel*9/5)+32).toFixed(2);
        return fahrenheit;
    }
    function fahToCel(fah){
        let celsius=((fah-32)*5/9).toFixed(2);
        return celsius;
    }

    if(valueTemp==="cel")
    {
        document.getElementById("result").innerHTML=celToFah(inputTemp)+"&#176; Fahrenheit";
    }
    else
    {
        document.getElementById("result").innerHTML=fahToCel(inputTemp)+"&#176; Celsius";
    }
}
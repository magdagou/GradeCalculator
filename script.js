function calculateCurrentGrade(){
    var hw = document.getElementById("hwa").value;

    var cw = document.getElementById("cwa").value;

    var tq = document.getElementById("tqa").value;

    var hwaverage = averageArray(convertArrayStringToNumber(hw));

    var cwaverage = averageArray(convertArrayStringToNumber(cw));

    var tqaverage = averageArray(convertArrayStringToNumber(tq));

    var hwweight = parseInt(document.getElementById("hww").value);

    var cwweight = parseInt(document.getElementById("cww").value);

    var tqweight = parseInt(document.getElementById("tqw").value);

    var currentweight = (hwweight + cwweight + tqweight);

    var currenthw = (hwaverage * (hwweight/100));

    var currentcw = (cwaverage * (cwweight/100));

    var currenttq = (tqaverage * (tqweight/100));

    var currentpoints = currenthw + currentcw + currenttq;

    var currentgrade = (currentpoints/currentweight)*100;

    document.getElementById("currentGrade").innerHTML = Math.round(currentgrade) + "%";

    return currentgrade;

}

function convertArrayStringToNumber(string){
    var array = string.split(", ");
    for (var i = 0; i < array.length; i++){
        array[i] = parseInt(array[i]);
    }
    return array;
}

function averageArray(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        var av = sum += array[i];
        var average = av / array.length;
    }
    return average;
}

function calculateGradeNeeded(){
    var grade = calculateCurrentGrade();

    var desiredgrade = parseInt(document.getElementById("desiredgrade").value);

    var weight = parseInt(document.getElementById("fweight").value);

    var gradeNeeded = 100 * (desiredgrade + (weight - grade))/weight;

    document.getElementById("GradeNeeded").innerHTML = "you need a " + Math.round(gradeNeeded) + "% to get a " + desiredgrade + "% on the final";
}
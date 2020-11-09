$.ajax({
    //API that contains student attendance.json, the data I will display class attendance for.
    url: 'https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/a8175e0b5c915d9e2d857a2f114704094ade22b9/attendance.json',
    dataType: 'json',
    success: function(data) {
    //*debug
    console.log(data);
    //*debug variable
    var counter = 0;
    //Variables for code to be inserted into table.
    var tdstream = "<td class='streamopt'></td>";
    var attendance = "<td><select id='attnmark' class='attnmark' onchange='attendanceCheck()'><option value='n'>N/A</option><option value='p'>Present</option><option value='l'>Late</option><option value='e'>Explained</option><option value='a'>Absent</option></select></td>";
    //for loop that builds table rows based on if conditions loop through each line of data     
    for (var i = 0; i < data.length; i++) {
        $("#sturole").append("<tr>");
        //Class hardcoded as context of attendance screen is the class day has been selected and the role is being filled in by a user.
        //.isActive is a value within the api array that has a value of 'true' or 'false', only active sttudents taking 'IN790' are displayed in the role attendance.
        if ((data[i].class == 'IN790') || (data[i].isActive == 'true')) {    
            //Adds student name stream option and attendance mark into the table as individual coloumns. 
            $("#sturole").append("<td>" + data[i].name.first + " " + data[i].name.last + tdstream + attendance); 
            counter++;  
            //for loop that loops through if conditions that will color code previous attendance based on the value of x being < data[i].attendance[x] this loop will check all previous attendance coloumns in a row and assign their color code class.
            for (var x = 0; x < data[i].attendance.length; x++) {  
                //if() Conditon dictates the color coding of previous attendance.
                if (data[i].attendance[x] == "a" ) {
                    //*debug
                    console.log("*absent class assigned*")
                    console.log(data[i].attendance[x]);
                    //Assigns negative attendance color code. dd//mm placeholder for date that would be logged for that previous attendance.
                    $("#sturole").append("<td class='absent tooltip'><span class=tooltiptext>absent | dd/mm</span>" + data[i].attendance[x] + "</td>");
                }
                if (data[i].attendance[x] == "s") {
                    //*debug
                    console.log("*sick class assigned*")
                    console.log(data[i].attendance[x]);
                     //Assigns neutral attendance color code
                    $("#sturole").append("<td class='sick tooltip'><span class=tooltiptext>sick | dd/mm</span>" + data[i].attendance[x] + "</td>");
                }
                if (data[i].attendance[x] == "l") {
                    //*debug
                    console.log("*late class assigned*")
                    console.log(data[i].attendance[x]);
                     //Assigns positive attendance color code
                    $("#sturole").append("<td class='late tooltip'><span class=tooltiptext>late | dd/mm</span>" + data[i].attendance[x] + "</td>");
                }
                if (data[i].attendance[x] == "p") {
                    //*debug
                    console.log("*present class assigned*")
                    console.log(data[i].attendance[x]);
                     //Assigns positive attendance color code
                    $("#sturole").append("<td class='present tooltip'><span class=tooltiptext>present | dd/mm</span>" + data[i].attendance[x] + "</td>");
                }
                if (data[i].attendance[x] == "e") {
                    //*debug
                    console.log("*sick class (e) assigned*")
                    console.log(data[i].attendance[x]);
                    //Assigns neutral attendance color code, shares sick class name both are neutral marks
                    $("#sturole").append("<td class='sick tooltip'><span class=tooltiptext>explained | dd/mm</span>"+ data[i].attendance[x] + "</td>");
                }
                //Closes table row
                $("#sturole").append("</tr>");
            }
        }
        //*debug
        console.log("count:",counter);
    };
        //Adds student count to bottom of table
        $('#stats').replaceWith("<td colspan='3'> Students: " + counter + "</td>")
}
});

//streamcheck() on stream option change, all students are autofilled to that stream with assigned value.
function streamCheck(){
    var rowCount = $('#roletable >tbody >tr').length;
    console.log("Row:", rowCount);
    //If stream is selected as 'A' by the user, statement will perform. 
    if (document.getElementById("streamsel").value == 'A'){
        //Loops all rows in table for stream option.
        for (var c = 0; c < rowCount; c++) {
            //Replaces displayed stream value with 'a'.
            $('.streamopt').replaceWith("<td class='streamopt'>A</td>");
        }
    }
    //same as above, except value is equal 'B'.
    else if (document.getElementById("streamsel").value == 'B'){
        for (var c = 0; c < rowCount; c++) {
            $('.streamopt').replaceWith("<td class='streamopt'>B</td>");
        }
    }
    //same as above, except value is equal 'n'.
    else if (document.getElementById("streamsel").value == 'n'){
        for (var c = 0; c < rowCount; c++) {
            //Returns null value represented by an empty coloumn
            $('.streamopt').replaceWith("<td class='streamopt'></td>");
        }
    }
}

//User has to confirm they want to submit attendance
function submitCheck() {
    alert("Attendance submission successful");
  }


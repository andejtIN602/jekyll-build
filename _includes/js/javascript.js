$.ajax({
    url: 'https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/a8175e0b5c915d9e2d857a2f114704094ade22b9/attendance.json',
    dataType: 'json',
    success: function(data) {
    console.log(data);
    //*Debug variable
    var counter = 0;  
    //Variables for code to be inserted into table.
    var tdstream = "<td class='streamopt'></td>";
    var attendance = "<td><select><option value=''>N/A</option><option value='p'>Present</option><option value='l'>Late</option><option value='e'>Explained Abs</option><option value='a'>Absent</option></select></td>";
    for (var i = 0; i < data.length; i++) {
        $("#sturole").append("<tr>");
        if ((data[i].class == 'IN790') || (data[i].isActive == 'true')) {     
            $("#sturole").append("<td>" + data[i].name.first + " " + data[i].name.last + tdstream + attendance); 
            counter++;  
            for (var x = 0; x < data[i].attendance.length; x++) {  
                //Conditon dictates the color coding of previous attendance
                if (data[i].attendance[x] == "a" ) {
                    console.log(data[i].attendance[x]);
                    $("#sturole").append("<td class='absent'>" + data[i].attendance[x] + "</td>");
                }
                if (data[i].attendance[x] == "s") {
                    console.log(data[i].attendance[x]);
                    $("#sturole").append("<td class='sick'>" + data[i].attendance[x] + "</td>");
                }
                if (data[i].attendance[x] == "l") {
                    console.log(data[i].attendance[x]);
                    $("#sturole").append("<td class='late'>" + data[i].attendance[x] + "</td>");
                }
                if (data[i].attendance[x] == "p") {
                    console.log(data[i].attendance[x]);
                    $("#sturole").append("<td class='present'>" + data[i].attendance[x] + "</td>");
                }
                if (data[i].attendance[x] == "e") {
                    console.log(data[i].attendance[x]);
                    $("#sturole").append("<td class='sick'>" + data[i].attendance[x] + "</td>");
                }
                $("#sturole").append("</tr>");
        }
        }
            console.log("count:",counter);
    };
}
});

//streamcheck() on stream option change, all students are autofilled to that stream with assigned value.
function streamcheck(){
    var rowCount = $('#roletable >tbody >tr').length;
    console.log("Row:", rowCount);
    //If stream is selected as 'a' by the user, statement will perform. 
    if (document.getElementById("streamsel").value == 'A'){
        //Loops all rows in table for stream option.
        for (var c = 0; c < rowCount; c++) {
            //Replaces displayed stream value with 'a'.
            $('.streamopt').replaceWith("<td class='streamopt'>A</td>");
        }
    }
    //same as above, except value is 'b'.
    else if (document.getElementById("streamsel").value == 'B'){
        for (var c = 0; c < rowCount; c++) {
            $('.streamopt').replaceWith("<td class='streamopt'>B</td>");
        }
    }
    //same as above, except value is 'null'.
    else if (document.getElementById("streamsel").value == ''){
        for (var c = 0; c < rowCount; c++) {
            $('.streamopt').replaceWith("<td class='streamopt'></td>");
        }
    }
}



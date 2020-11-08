$.ajax({
    url: 'https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/a8175e0b5c915d9e2d857a2f114704094ade22b9/attendance.json',
    dataType: 'json',
    success: function(data) {
    console.log(data);
    //Variables for previous attendance array.
    var pc1 = 0, pc2 = 1, pc3 = 2, pc4 = 3;
    //Variables for code to be inserted into table.
    var tdstream = "<td class='streamopt'></td>"
    var attendance = "<td><select><option value=''>N/A</option><option value='p'>Present</option><option value='l'>Late</option><option value='e'>Explained Abs</option><option value='a'>Absent</option></select></td>";
    //Row count function.
    var rowCount = $('#roletable >tbody >tr').length;
    console.log(rowCount);
    for (var i = 0; i < data.length; i++) {
        if ((data[i].class == 'IN790') || (data[i].isActive == 'true')) {           
                $("#sturole").append("<tr><td>" + data[i].name.first + " " + data[i].name.last + tdstream + attendance + 
                "<td id='pa1'>" + data[i].attendance[pc1] +"</td><td id='pa2'>"+ data[i].attendance[pc2] +"</td><td id='pa3'>"+ data[i].attendance[pc3] +
                "</td><td id='pa4'>"+ data[i].attendance[pc4] +  "</td></tr>");
                if (data[i].attendance[pc1] == 'a') {
                    $('.pa1').addClass('.absent')
                }
        }
            
        
    };
}
});

//streamcheck() on stream option change, all students are autofilled to that stream with assigned value.
function streamcheck(){
    var rowCount = $('#roletable >tbody >tr').length;
    console.log("Row:", rowCount);
    //If stream is selected as 'a' by the user, statement will perform. 
    if (document.getElementById("streamsel").value == 'a'){
        //Loops all rows in table for stream option.
        for (var c = 0; c < rowCount; c++) {
            //Replaces displayed stream value with 'a'.
            $('.streamopt').replaceWith("<td class='streamopt'>a</td>")
        }
    }
    //same as above, except value is 'b'.
    else if (document.getElementById("streamsel").value == 'b'){
        for (var c = 0; c < rowCount; c++) {
            $('.streamopt').replaceWith("<td class='streamopt'>b</td>")
        }
    }
    //same as above, except value is 'null'.
    else if (document.getElementById("streamsel").value == ''){
        for (var c = 0; c < rowCount; c++) {
            $('.streamopt').replaceWith("<td class='streamopt'></td>")
        }
    }
}



function submit()
{
    var display_guest_array = [];

    for (var j=1; j<=4; j++)
    {
        var name_of_the_guest =document.getElementById("name_of_the_guest_"+j).value;
        console.log(name_of_the_guest);        
        name_of_the_guest_array.push(name_of_the_guest);
    }

    console.log(name_of_the_guest_array);

    var length_of_name_of_guests_array=name_of_the_guest_array.length;
    console.log(length_of_name_of_guests_array);

    for (var k=0; k<length_of_name_of_guests_array; k++)
    {
        display_guests_array.push("<h4>Name- "+name_of_the_guest_array[k]+"</h4>");
        console.log(display_guest_array);
    }

    var remove_commas=display_guest_array.join(" ");
    document.getElementById("display_name_without_commas")
    
    document.getElementById("submit_button").style.display="none";
    
}
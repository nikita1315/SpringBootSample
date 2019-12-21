function test () {

    $.ajax({
        url: '/api/films/get?id=1',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (films) {
            console.log(films);
            console.log(films.title);
            console.log(films.rating);
            alert('success');
        },
        error: function (response) {
            alert('error');
        }
    });


}


$(document).ready(function () {


    $.ajax({
        url: '/api/films/all',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (films) {

            console.log(films);

            for (let i = 0; i < films.length; i++) {
                $("#forAdd").before(
                    "<tr>"+
                    "<td>"+films[i].id+"</td>"+
                    "<td>"+films[i].title+"</td>"+
                    "<td>"+films[i].rating+"</td>"+
                    "<td>"+films[i].age+"</td>"+
                    "<td>"+
                    "<a type=\"button\" class=\"btn btn-primary\" href=\"/films/edit?id= " + films[i].id+" \">Edit</a>"+
                    "</td>"+
                    "<td>"+
                    "<a type=\"button\" class=\"btn btn-danger\" href=\"/films/delete?id=" + films[i].id +" \">Delete</a>"+
                    "</td>"+
                    "</tr>")

            }


        },
        error: function (response) {
            alert('error');
        }
    });

})


function addFilm() {
    var title = $("#title").val();
    var rating = $("#rating").val();
    var age = $("#age").val();

    var newFilm = {
        'title' : title,
        'rating' : rating,
        'age' : age
    }
    $.ajax({
        method: "post",
        url:"/api/films/add",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(newFilm),
        success: function () {
            window.location.replace("/films/all");

        },
        error: function (error) {

        }

    });
}

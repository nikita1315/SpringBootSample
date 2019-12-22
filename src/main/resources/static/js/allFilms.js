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
                    "<button  data-toggle=\"modal\" data-target=\"#edit-modal\" onclick=\"fillModal("+films[i].id+")\" class=\"btn btn-primary\" >Edit</button>"+
                    "</td>"+
                    "<td>"+
                    "<a type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#aus\" >Delete</a>"+
                    "</td>"+
                    "</tr>")

            }


        },
        error: function (response) {
            alert('error');
        }
    });

})


function addEditedFilm() {
    var id = $("#id-edit").val();
    var title = $("#title-edit").val();
    var rating = $("#rating-edit").val();
    var age = $("#age-edit").val();

    var newFilm = {
        'id': id,
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

function deleteFilm(id) {
alert(id);

    $.ajax({
        method: "get",
        url:"/api/films/delete?id="+id,
        contentType: "application/json; charset=utf-8",

        success: function () {
            window.location.replace("/films/all");
            $("#id-delete").val(films.id);

        },
        error: function (error) {
            alert("error")

        }

    });


}

function fillModal(id) {
    alert(id)

    $.ajax({
        method: "get",
        url:"/api/films/get?id="+id,
        contentType:"application/json; charset=utf-8",
        success: function (films) {
            $("#id-edit").val(films.id);
            $("#title-edit").val(films.title);
            $("#rating-edit").val(films.rating);
            $("#age-edit").val(films.age);

        }
    })

}
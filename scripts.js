console.log("scripts connected");

var first, last, home;

var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];

function readNames() {
    // iterate over names
    for ( var i = 0; i < table_data.length; i++ ) {
    var first = table_data[i].first_name;
    var last = table_data[i].last_name;
    var home = table_data[i].home;
    console.log("First Name: " + first + '\n' + "Last Name: " + last + '\n' + "Home: " + home);

    if (last === null) {
      var last = 'none';
    };

    // add info to table
    var t = document.createElement("TR");
    t.setAttribute("id", "rowOne");
    document.getElementById("myTable").appendChild(t);

    var ab = document.createElement("TD");
    var a = document.createTextNode("First Name: " + first);
    ab.appendChild(a);
    document.getElementById("rowOne").appendChild(ab);

    var u = document.createElement("TR");
    u.setAttribute("id", "rowTwo");
    document.getElementById("myTable").appendChild(u);

    var cd = document.createElement("TD");
    var b = document.createTextNode("Last Name: " + last);
    cd.appendChild(b);
    document.getElementById("rowTwo").appendChild(cd);

    var v = document.createElement("TR");
    v.setAttribute("id", "rowThree");
    document.getElementById("myTable").appendChild(v);

    var ef = document.createElement("TD");
    var b = document.createTextNode('\"Home\": ' + home);
    ef.appendChild(b);
    document.getElementById("rowThree").appendChild(ef);
}
};







// *** intentional whitespace ***

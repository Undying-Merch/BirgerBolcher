let xmlhttp;

//SQL-02 page functions
function showAll()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showAll").innerHTML = this.responseText;
            console.log(this.responseText);
        }
    };
    xmlhttp.open("GET","../PHPScripts/SQL02/showAll.php", true);
    xmlhttp.send();
}

function showAllRed()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showRed").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../PHPScripts/SQL02/ShowRed.php", true);
    xmlhttp.send();
}

function showAllRedBlue()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showRedBlue").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../PHPScripts/SQL02/ShowRedBlue.php", true);
    xmlhttp.send();
}

function showAllButRed()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showAllButRed").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../PHPScripts/SQL02/ShowAllButRed.php", true);
    xmlhttp.send();
}

function showAllWithB() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("showAllWithB").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL02/ShowAllWithB.php", true);
    xmlhttp.send();
}

function showAllWithAE()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showAllWithAE").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../PHPScripts/SQL02/ShowAllWithAE.php", true);
    xmlhttp.send();
}

function showUnder10Gram()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("show10GramOrLess").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../PHPScripts/SQL02/showUnder10Grams.php", true);
    xmlhttp.send();
}

function showBetween10And12()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showBetween10A12").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../PHPScripts/SQL02/ShowBetween10And12.php", true);
    xmlhttp.send();
}

function show3Heavy()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("show3Heavy").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../PHPScripts/SQL02/Show3Heavy.php", true);
    xmlhttp.send();
}

function showRandom()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showRando").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../PHPScripts/SQL02/ShowRando.php", true);
    xmlhttp.send();
}

function loadSQL2(){
    showAll();
    showAllRed();
    showAllRedBlue();
    showAllButRed();
    showAllWithB();
    showAllWithAE();
    showUnder10Gram();
    showBetween10And12();
    show3Heavy();
    showRandom();


}

//SQL03

function showAllOnClick()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showAllFromButton").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../PHPScripts/SQL02/ShowAll.php", true);
    xmlhttp.send();
}

function searching()
{
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("q");
    filter = input.value.toUpperCase();
    table = document.getElementById("bolcheTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i<tr.length; i++)
    {
        td = tr[i].getElementsByTagName("td")[1];
        if (td)
        {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1)
            {
                tr[i].style.display = "";
            }
            else
            {
                tr[i].style.display = "none";
            }
        }
    }
}

function precisionSearch()
{
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("q");
    filter = input.value;
    table = document.getElementById("bolcheTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i<tr.length; i++)
    {
        td = tr[i].getElementsByTagName("td")[1];
        if (td)
        {
            txtValue = td.textContent || td.innerText;
            if (txtValue.startsWith(filter, 0))
            {
                tr[i].style.display = "";
            }
            else
            {
                tr[i].style.display = "none";
            }
        }
    }
}
function searchBar()
{
    const cB = document.querySelector('#precision');
    if (cB.checked === true)
    {
        precisionSearch();
    }
    else
    {
        searching();
    }
}

function showColor(str)
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showAllFromButton").innerHTML = this.responseText;
        }
    };
    if (str != "")
    {
        xmlhttp.open("GET", "../PHPScripts/SQL03/ShowColor.php?c="+str, true);
        xmlhttp.send();
    }
    else
    {
        xmlhttp.open("GET", "../PHPScripts/SQL02/ShowAll.php", true);
        xmlhttp.send();
    }
}

//SQL04

function showPricing()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("tableInsert").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL04/ShowPrice.php", true);
    xmlhttp.send();
}

//SQL06

function allCustomers()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showAllC").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL06/ShowCustomers.php", true);
    xmlhttp.send();
}

function allOrders() {
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showAllO").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL06/ShowOrders.php", true);
    xmlhttp.send();
}

function latestOrder() {

    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showLatestOrder").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL06/ShowNewestOrder.php", true);
    xmlhttp.send();
}

function loadSQL06(){
    allCustomers();
    allOrders();
    latestOrder();
}

//SQL07

function customersWithOrders() {
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("customersWithOrders").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL07/CustomerWithOrders.php", true);
    xmlhttp.send();
}

function setupTable() {
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("showTableWithAllOrdersAndCustomers").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL07/CustomerAndOrdersCombo.php", true);
    xmlhttp.send();
}

function showBolche(str)
{
    var  filter, table, tr, td, i, txtValue;
    filter = str;
    table = document.getElementById('tableWithAllOrdersAndCustomers');
    tr = table.getElementsByTagName('tr');
    console.log(filter);
    for (i = 0; i < tr.length; i++)
    {
        td = tr[i].getElementsByTagName("td")[4];
        if (td)
        {
            txtValue = td.getAttribute('data-id') || td.innerText;
            console.log(txtValue);
            if (txtValue.indexOf(filter) > -1)
            {
                tr[i].style.display = "";
            }
            else
            {
                tr[i].style.display = "none";
            }
        }
    }
}

function loadSQL07(){
    customersWithOrders();
    setupTable();

}

//SQL08

function getOrder(id) {
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("specificKunde").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL08/GetOrder.php?id="+id, true);
    xmlhttp.send();
}

function allOver100Gram() {
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("ListOf100Over").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL08/BoughtOver100Gram.php", true);
    xmlhttp.send();
}

function sameTownPlusStrongBolcher(city) {
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("SameTownList").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL08/SameTownPlusStrong.php?c="+city, true);
    xmlhttp.send();

}

function allCustomerGrouped() {
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("Grouping").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL08/CustomerGrouping.php", true);
    xmlhttp.send();
}

function over5Kr() {
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("over5krBought").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL08/BoughtOver5Kr.php", true);
    xmlhttp.send();
}

function boughtBlueShark() {
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("blueShark").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../PHPScripts/SQL08/BlueShark.php", true);
    xmlhttp.send();
}

function loadSQL08(){
    getOrder(4);
    allOver100Gram();
    sameTownPlusStrongBolcher(5700);
    allCustomerGrouped();
    over5Kr();
    boughtBlueShark();


}
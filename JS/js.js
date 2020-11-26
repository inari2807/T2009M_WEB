function gridProducts= [];// lap day du lieu products























function loadFata() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText;
            rs = JSON.parse(rs);
            var products = rs.data;
            var products_html = document.getElementById("products");
            products_html.innerHTML = gridProducts(products);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/today-special");
    xhttp.send();
}
loadData();
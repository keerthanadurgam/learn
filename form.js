function para(){
    document.getElementById("para").style.display='block';
}
function section(){
    document.getElementById("section").style.display='block';
}
function list(){
    document.getElementById("list").style.display='block'
}
function hello(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    document.getElementById("show").innerText= name+ phone+password

}
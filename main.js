var courseName= document.querySelector("#courseName");
var courseCategory= document.querySelector("#courseCategory");
var coursePrice= document.querySelector("#coursePrice");
var courseDescription= document.querySelector("#courseDescription");
var courseCapacity= document.querySelector("#courseCapacity");
var addBtn=document.querySelector("#click");
console.log(courseName);
var courses=[];
var inputs=document.querySelectorAll(".inputs");
addBtn.addEventListener("click",function(e){
e.preventDefault();
addCourse();
clearInputs();
displayData();
})

function addCourse(){
    var course={
        name:courseName.value,
        category:courseCategory.value,
        price:coursePrice.value,
        description:courseDescription.value,
        capacity:courseCapacity.value,
    }
    courses.push(course);
    console.log(courses);

}

function clearInputs(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}

function displayData(){
    var result="";
    for(var i=0;i<courses.length;i++){
        result+=`
        <tr>
        <td>${i}</td>
        <td>${courses[i].name}</td>
        <td>${courses[i].category}</td>
        <td>${courses[i].price}</td>
        <td>${courses[i].description}</td>
        <td>${courses[i].capacity}</td>
        <td><button class="btn btn-outline-info">Update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteCource(${i})">Delete</button></td>

        </tr>
        `
}
document.getElementById("data").innerHTML=result;
}

function deleteCource(id){
    courses.splice(id,1);
    displayData();
}


var courseName= document.querySelector("#courseName");
var courseCategory= document.querySelector("#courseCategory");
var coursePrice= document.querySelector("#coursePrice");
var courseDescription= document.querySelector("#courseDescription");
var courseCapacity= document.querySelector("#courseCapacity");
var addBtn=document.querySelector("#click");
var courses=[];
var search=document.querySelector("#search");
var inputs=document.querySelectorAll(".inputs");
var nameError =document.querySelector('.nameError')
var isNameTrue=false;
if(courses=JSON.parse(localStorage.getItem("courses"))==null){
    var courses=[];
}
else{
courses=JSON.parse(localStorage.getItem("courses"));

displayData();
}

addBtn.addEventListener("click",function(e){
e.preventDefault();
addCourse();
clearInputs();
displayData();
});

function addCourse(){
    var course={
        name:courseName.value,
        category:courseCategory.value,
        price:coursePrice.value,
        description:courseDescription.value,
        capacity:courseCapacity.value,
    }
    courses.push(course);
    localStorage.setItem("courses",JSON.stringify(courses));
    swal({
        title: "Done!",
        text: "course added successfully!",
        icon: "success",
        button: "OK!",
      });
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
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            courses.splice(id,1);
            localStorage.setItem("courses",JSON.stringify(courses));

            displayData();
            icon: "success",
          swal("Done! Your file has been deleted!", {       
          });
        } else {
          swal("Your file is safe!");
        }
      });}


search.addEventListener("keyup",function(e){
var result="";
for(var i=0;i<courses.length;i++){
    if(courses[i].name.toLowerCase().includes(e.target.value.toLowerCase()))
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

})

courseName.addEventListener("keyup", function(){
    var pattern=/^[A-Z][a-z]{2,10}$/;
    if(pattern.test(courseName.value)){
        if(courseName.classList.contains('is-invalid')){
            courseName.classList.remove('is-invalid');
        }
        courseName.classList.add('is-valid');
        nameError.style.cssText="display:none";
        isNameTrue=true;
        enabled(isNameTrue);
    }
    else{
        if( courseName.classList.contains('is-valid')){
            courseName.classList.remove('is-valid');

        }
        courseName.classList.add('is-invalid');
        nameError.style.cssText="display:block";
        isNameTrue=false;
        enabled(isNameTrue);
    }
})
function enabled(x){
    if(x){
        addBtn.removeAttribute('disabled');
    }
    else{
        addBtn.setAttribute('disabled', 'disabled');
    }
}

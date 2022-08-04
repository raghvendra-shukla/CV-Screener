
const data=[
    {
        name: "Rohan Das",
        age: 18,
        city: "Kolkata",
        language: "python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/56.jpg"
    },

    {
        name: "ashish chanchalani",
        age: 28,
        city: "Mumbai",
        language: "javascript",
        framework: "angular",
        image: "https://randomuser.me/api/portraits/men/67.jpg"
    },

    {
        name: "nikhil pandey",
        age: 38,
        city: "Kolkata",
        language: "python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/65.jpg"
    },

    {
        name: "Aishwariya Rai",
        age: 45,
        city: "Bangalore",
        language: "python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },

    {
        name: "Rohit Sharma",
        age: 35,
        city: "Jharkhand",
        language: "Go",
        framework: "false",
        image: "https://randomuser.me/api/portraits/men/69.jpg"
    },
]
//CV iterator
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++],done: false}:
            {done: true}
        }
    };
}
const candidates=cvIterator(data);

nextCV();
//Button litsener for next button
const next=document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV(){
    const currentCandidate=candidates.next().value;
    if(currentCandidate!=undefined){
    let image=document.getElementById("image");
    let profile=document.getElementById("profile");
    image.innerHTML=`<img src="${currentCandidate.image}">`;
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">${currentCandidate.language} framework</li>
    </ul>`;
    }
    else{
        alert("End of candidate applications");
        window.location.reload();
    }
}
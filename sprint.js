const countDiv = document.getElementById("count");
const hobbiesDiv = document.getElementById("hobbies");
const ageDiv = document.getElementById("age");


// FETCH and read the sprint.json disk file

fetch("./sprint.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        countRecords(data);
        listHobbies(data);
        averageAge(data);
        
    })
    .catch(error => {
        console.error(error);
        });

function getName(person) {
    return `${person.name}`;
}

function countRecords(data) {
    const count = data.length;
    countDiv.innerText = `There are ${data.length} records in this JSON file.`;
}

function listHobbies(data) {
    let hobbies = [];
    data.forEach(person => {
        hobbies = hobbies.concat(person.hobbies);
    });
    hobbies = [...new Set(hobbies)];
    hobbiesDiv.innerText = `The hobbies in this JSON file are: ${hobbies.join(", ")}.`;
}

function averageAge(data) {
    let totalAge = 0;
    data.forEach(person => {
        totalAge += person.age;
    });

    const average = totalAge / data.length;
    ageDiv.innerText = `The average age in this JSON file is ${average.toFixed(1)}.`;
}


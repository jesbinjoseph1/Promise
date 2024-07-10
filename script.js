//Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched successfully"
//after a delay of 2 seconds. Use setTimeout to simulate the delay. Test your function by calling it and using .then()
//to log the resolved value to the console.

// function fetchData(){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res('Data fetched successfully')
//         },2000)
//     })
// }
// fetchData().then((result)=>{
//     console.log(result);
// })

// Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data"
// Modify your test to handle this rejection using .catch().


// function fetchData() {
//     return new Promise((resolve, reject) => {
//         let err = true;
//         setTimeout(() => {
//             x="Data fetched successfully"
//             if (err) {
//                 reject('Failed to fetch data');
//             } else {
//                 resolve(x);
//             }
//         }, 2000);
//     })
// }

// fetchData()
//     .then((result) => {
//         console.log({ result });
//     })
//     .catch((err) => {
//         console.log({ err });
//     });


// Convert the fetchData function from Question  1 to use async and await instead of .then(). Ensure to handle
// errors using try and catch

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         let err = false;
//         setTimeout(() => {
//             x = "Data fetched successfully"
//             if (err) {
//                 reject('Failed to fetch data');
//             } else {
//                 resolve(x);
//             }
//         }, 2000);
//     })
// }
// async function fetchDataAsync() {
//     try {
//         const result =await fetchData()
//         console.log({result});
//     } catch (err) {
//         console.log({err});
//     }
// }
// fetchDataAsync()

// Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ". 
// Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on 
// the web page. Make sure to handle any errors that might occur during the fetch operation and display an appropriate 
// error message in the div if the fetch fails. (deploy the webpage on github)

function getcountryData() {
    fetch('https://restcountries.com/v3.1/all')
        .then((result) => {
            return result.json()
        })
        .then((result) => {
            for (let i = 0; i < result.length; i++) {
                const imageContainer = document.createElement('div');
                const heading = document.createElement('h2');
                heading.innerText = (i+1)+'-'+result[i].name.common;
                imageContainer.appendChild(heading);

                const image = document.createElement('img');
                image.src = result[i].flags.png;
                image.className = 'flags';

                imageContainer.appendChild(image);
                document.getElementById('container').appendChild(imageContainer);
            }
        })
        .catch(console.error)

}

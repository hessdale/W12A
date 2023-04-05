//defining body variable to inject html into
let body_html = document.querySelector(`body`);
//success function for db request
function successFunction(response) {
    //removes fetching meal data
    let remove_id = document.getElementById(`remove`);
    remove_id.outerHTML = ``;
    //using a for loop to add in all the recipe data
    for (i = 0; i < response.data.meals.length; i++) {
        body_html.insertAdjacentHTML(`afterbegin`, `<h1>${response.data.meals[0].strMeal}</h1>
        <img src="${response.data.meals[0].strMealThumb}" alt="random meal thumbnail" width="350px">
        <h2>Cuisine: ${response.data.meals[0].strArea}</h2>
        <h2>Category: ${response.data.meals[0].strCategory}</h2>
        <h3>Ingredients</h3>
        <p><b>${response.data.meals[0].strMeasure1}</b> ${response.data.meals[0].strIngredient1}</p>
        <p><b>${response.data.meals[0].strMeasure2}</b> ${response.data.meals[0].strIngredient2}</p>
        <p><b>${response.data.meals[0].strMeasure3}</b> ${response.data.meals[0].strIngredient3}</p>
        <p><b>${response.data.meals[0].strMeasure4}</b> ${response.data.meals[0].strIngredient4}</p>
        <p><b>${response.data.meals[0].strMeasure5}</b> ${response.data.meals[0].strIngredient5}</p>
        <p><b>${response.data.meals[0].strMeasure6}</b> ${response.data.meals[0].strIngredient6}</p>
        <p><b>${response.data.meals[0].strMeasure7}</b> ${response.data.meals[0].strIngredient7}</p>
        <p><b>${response.data.meals[0].strMeasure8}</b> ${response.data.meals[0].strIngredient8}</p>
        <p><b>${response.data.meals[0].strMeasure9}</b> ${response.data.meals[0].strIngredient9}</p>
        <p><b>${response.data.meals[0].strMeasure10}</b> ${response.data.meals[0].strIngredient10}</p>
        <p><b>${response.data.meals[0].strMeasure11}</b> ${response.data.meals[0].strIngredient11}</p>
        <p><b>${response.data.meals[0].strMeasure12}</b> ${response.data.meals[0].strIngredient12}</p>
        <p><b>${response.data.meals[0].strMeasure13}</b> ${response.data.meals[0].strIngredient13}</p>
        <p><b>${response.data.meals[0].strMeasure14}</b> ${response.data.meals[0].strIngredient14}</p>
        <p><b>${response.data.meals[0].strMeasure15}</b> ${response.data.meals[0].strIngredient15}</p>
        <p><b>${response.data.meals[0].strMeasure16}</b> ${response.data.meals[0].strIngredient16}</p>
        <p><b>${response.data.meals[0].strMeasure17}</b> ${response.data.meals[0].strIngredient17}</p>
        <p><b>${response.data.meals[0].strMeasure18}</b> ${response.data.meals[0].strIngredient18}</p>
        <p><b>${response.data.meals[0].strMeasure19}</b> ${response.data.meals[0].strIngredient19}</p>
        <p><b>${response.data.meals[0].strMeasure20}</b> ${response.data.meals[0].strIngredient20}</p>
        <h1>Instructions</h1>
        <p>${response.data.meals[0].strInstructions}</p>
        `)
    };
};
//defining failure for db request
function failureFunction(error) {
    //inserts error html
    body_html.insertAdjacentHTML(`afterbegin`, `<h1>ERROR</h1>`);
};
//function that calls to db for random meal
function fetchfood(dettails) {
    //inserts html with id to easily remove
    body_html.insertAdjacentHTML(`afterbegin`, `<h1 id="remove">FETCHING MEAL DATA</h1>`);
    //console logs getting meal data
    console.log(`fetching meal data`);
    //request to db with successFunction and failureFunction
    axios.request({
        url: `https://www.themealdb.com/api/json/v1/1/random.php`
    }).then(successFunction).catch(failureFunction);
};

let button = document.querySelector(`button`);

button.addEventListener(`click`, fetchfood);


"use strict";

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
	$('#get-fortune-button').on('click', (evt) => {
        // create event listener that takes a click and a callback function 
        // the callback function is an anonymous arrow function that takes the
        // event as an argument 
	 	evt.preventDefault();
        // prevent page from refreshing
	 	$.get('/fortune', (fortune) => {
            // get the route and what ut returns
	 		$('#fortune-text').html(fortune);
            // render? the html, adding in the result we got from the route/function
            // in the div (or whatever) 'fortune-text'
	 	});
	 })
}

	 

    // TODO: get the fortune and show it in the #fortune-text div


showFortune()





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    // get the route/function 

    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (weather) => {
	 		const showWeather = weather.forecast
	 		$('#weather-info').html(showWeather);
	 	})
   }


// 'weather' is just what is returned by the function in the route?



    // TODO: request weather with that URL and show the forecast in #weather-info


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    let url='/order-melons.json'
    const formInputs = {
    'qty': $('#qty-field').val(),
    'melon_type': $('#melon-type-field').val()
  };
  console.log(formInputs)

    // $.post(url, formInputs) =>{
        
    // }

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);



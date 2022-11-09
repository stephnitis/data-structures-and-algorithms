const Graph = require('../index');

function businessTrip(graph, array){
  let cost = 0;
  for(let i = 0; i < array.length; i++){
    let allCities = graph.getNodes();
    let city = allCities.filter(city => city.value === array[i])[0];
    let routes = graph.getNeighbors(city);
    let flights = routes.filter(city => city.vertex.value === array[i + 1])[0];
    if(flights){
      cost = (cost + flights.weight);
    } else if (i === array.length - 1){
      return `$${cost}`;
    } else {
      return null;
    }
  }
}

businessTrip();

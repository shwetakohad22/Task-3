var countryRequest = new XMLHttpRequest();
countryRequest.open("GET", "https://restcountries.com/v3.1/all");
countryRequest.addEventListener('load', function (){
  displayCountryFlags(JSON.parse(this.response))
});

countryRequest.send();

function displayCountryFlags(data = []) {
  for (var i = 0; i < data.length; i++) {
    var country = data[i];
    var flags = country.flags;

    if (flags && Array.isArray(flags)) {
      // Display each flag in the console
      for (var j = 0; j < flags.length; j++) {
        console.log(`Country ${country.name.common} Flag ${j + 1}: ${flags[j]}`);
      }
    } else {
      console.log(`Country ${country.name.common} has no flags.`);
    }
  }
}

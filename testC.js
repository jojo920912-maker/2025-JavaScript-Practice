const airport = [
  {
    code: "TPE",
    city: "Taipei",
    country: "Taiwan"
  },
  {
    code: "KHH",
    city: "Kaohsiung",
    country: "Taiwan"
  },
  {
    code: "NRT",
    city: "Tokyo",
    country: "Japan"
  },
  {
    code: "HND",
    city: "Tokyo",
    country: "Japan"
  }
]

// Please complete the function to find the airport code by city name
function findAirportCodeByCity(air) {
  const codes =[]

  for(let i = 0 ; i < airport.length ; i ++){
    if(airport[i].city === air){
      codes.push(
        airport[i].code
      )
  }
  }
  return codes
}

// Example usage:
console.log(findAirportCodeByCity("Tokyo")) // Should return ["NRT", "HND"]
console.log(findAirportCodeByCity("Taipei")) // Should return ["TPE"]
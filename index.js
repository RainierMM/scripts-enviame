//EJERCICIO 1
let number = 1;
let number2 = 10;

const primeNumbers = (a, b) => {
  if (a < 0 || b < 0) {
    return "Enter a positive number please";
  }

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    let limit = 0;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        limit = 1;
        break;
      }
    }

    if (i > 1 && limit === 0) {
      console.log(i);
    }
  }
};

console.log(primeNumbers(number, number2));

// EJERCICIO 2
// JSON
let values = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  17: {
    carrier: "CHP",
    service: "express",
  },
};
// JSON
let json = {
  data: {
    BUIN: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
    LAJA: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LEBU: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LOTA: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
  },
};

const matchData = () => {
  let objMapValues = Object.values(json.data).map((el, idx) => {
    let matchData = {
      limit: el.limit,
      over: values[el.over_carrier_service_id],
      under: values[el.under_carrier_service_id],
    };

    return [Object.keys(json.data)[idx], matchData];
  });

  let result = Object.fromEntries(objMapValues);

  return result;
};

console.log(matchData());

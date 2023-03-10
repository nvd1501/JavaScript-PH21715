console.log("BĂ i 1");

const gameEvents = new Map([
    [17, 'â˝ď¸ GOAL'],
    [36, 'đ Substitution'],
    [47, 'â˝ď¸ GOAL'],
    [61, 'đ Substitution'],
    [64, 'đś Yellow card'],
    [69, 'đ´ Red card'],
    [70, 'đ Substitution'],
    [72, 'đ Substitution'],
    [76, 'â˝ď¸ GOAL'],
    [80, 'â˝ď¸ GOAL'],
    [92, 'đś Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
gameEvents.delete(64);
console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}

console.log("BĂ i 2");

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'â'.repeat(i + 1)}`);
    }
});

console.log("BĂ i 3");

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// đ´ Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   đ´ Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? 'đ´' : ''}${type.replaceAll(
        '_',
        ' '
    )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
    console.log(output);
}

console.log("BĂ i 4");

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
      header.style.color = 'blue';
    });
  })();
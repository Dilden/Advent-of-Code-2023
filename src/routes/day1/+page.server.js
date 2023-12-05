const wordsToNums = { 
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  0: 'zero'
};

export const actions = {
  default: async ({ request }) => {
    let data = await request.formData();
    const lines = data.get('coords').split(/\r?\n|\r|\n/g);
    
    const sums = lines.map((line) => {
      if(line) {
        const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;
        
        let matches = [...line.matchAll(regex) ];
        let first = matches[0][1];
        let last = matches[matches.length -1][1];

        Object.entries( wordsToNums ).map(([key, value]) => {
          if(first === value) {
            first = key;
          }
          if(last === value) {
            last = key;
          }
        })

        return parseInt( first ) + '' + parseInt( last );

        // part 1
        // const digits = line.split('')
        //   .filter(char => parseInt(char))
        //   .join('');

        // return digits[0] + '' + digits[digits.length -1];
      }
    })
    .reduce(( accum, num ) => accum + parseInt( num ), 0);

    return {
      sum: sums
    }
  }
}

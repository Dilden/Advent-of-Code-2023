
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const lines = data.get('coords').split(/\r?\n|\r|\n/g);
    
    const sums = lines.map((line) => {
        const digits = line.split('')
          .filter(char => parseInt(char))
          .join('');

        return digits[0] + '' + digits[digits.length -1];
      })
      .reduce(( accum, num ) => accum + parseInt( num ), 0);

    return {
      sum: sums
    }
  }
}

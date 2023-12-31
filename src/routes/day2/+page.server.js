export const actions = {
  possible: async ({ request }) => {
    const redMax = 12;
    const greenMax = 13;
    const blueMax = 14;

    let data = await request.formData();
    const lines = data.get('games').split(/\r?\n|\r|\n/g);
    
    const sums = lines.map((line) => {

      const game = {
        id: line.match(/(?!Game )(\d+)(?=:)/g),
        blues: line.match(/(\d+)(?= blue)/g),
        reds: line.match(/(\d+)(?= red)/g),
        greens: line.match(/(\d+)(?= green)/g)
      }

      // vibe check
      if(( game?.blues?.length === game?.blues?.filter(x => x <= blueMax)?.length ) && 
        ( game?.reds?.length === game?.reds?.filter(x => x <= redMax)?.length ) && 
        ( game?.greens?.length === game?.greens?.filter(x => x <= greenMax)?.length  )
      ) {
        return game;
      }
    })
    .filter(x => x) // some games don't pass the vibe check and come back as undefined
    .reduce(( accum, { id } ) => accum + parseInt( id ), 0);

    return {
      sum: sums
    }
  },
  power: async ({ request }) => {
    let data = await request.formData();
    const lines = data.get('games').split(/\r?\n|\r|\n/g);
    
    const sums = lines.map((line) => {
      const game = {
        id: line.match(/(?!Game )(\d+)(?=:)/g),
        blues: line.match(/(\d+)(?= blue)/g),
        reds: line.match(/(\d+)(?= red)/g),
        greens: line.match(/(\d+)(?= green)/g)
      }
      return {
        blue: Math.max( ...game.blues.map(Number) ),
        red: Math.max( ...game.reds.map(Number) ),
        green: Math.max( ...game.greens.map(Number) )
      }
    })
    .reduce(( accum, { blue, red, green } ) => { 
      return accum + (blue * red * green);
    }, 0);

    return {
      sum: sums
    }
  }
}

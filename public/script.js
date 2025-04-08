// Create a function that tests the post route handler [2 pts]
let base ="https://scaling-spoon-wrgv965qvr99c97r6-3000.app.github.dev/"
async function postCreature() {
  try {
      // fill in the path
      const response = await fetch(base + "/create-potion", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            label: "whisper",
    effect: "whisper",
    ingredients: "tongue",
    color: "silver",
    isExplosive: true
          })

      });
      const json = await response.json();
      console.log(json);
  } catch (error) {
      console.error(error.message);
  }
}
  
  async function getPostion(name){
    // fill in the path
    const response = await fetch(base + "/create-postion/" + name)
    const data = await response.json()
    console.log(data)
}

getPostion("Whisper potion")
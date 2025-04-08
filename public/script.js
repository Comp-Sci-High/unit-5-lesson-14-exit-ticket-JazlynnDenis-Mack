// Create a function that tests the post route handler [2 pts]
base ="https://scaling-spoon-wrgv965qvr99c97r6-3000.app.github.dev/"
async function sendData() {
    const dataToSend = {
        label: "Whisper",
        effect: "Cannot talk above a whisper",
        ingredients: "frog eyes, flew wings, elephant poop",
        color: "Silver",
        isExplosive: true
    };
  
    const response = await fetch(base+ "/create-potion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    });
  
    const result = await response.json();
    console.log(result);
  }
  sendData()
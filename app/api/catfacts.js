import axios from "axios";

const catfacts = [
    {
        id: 1,
        text: "A group of cats is called a “clowder.”"
    }, {
        id: 2, 
        text: "Cat's can't taste sweetness. Scientists believe it's due to a genetic mutation that affects key taste receptors. "
    }, {
        id: 3, 
        text: "Cats only meow as a way to communicate with humans. "
    }, {
      id: 4, 
      text: "i like cats"
    }
]

//Denne skal nok endres, ingen grunn for timeout i dette tilfelle. Kan bare hente response. 
export function GET() {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(catfacts);
    });
})};


export async function POST(data) {
    return await axios.post('/api/catfacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
}
/*
Prøvde men fikk den ikke til å funke med koden
export default function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        catfacts.push(data);
        res.status(201).json({ success: true, data: catfacts });
    } else if (req.method === 'PUT') {
        res.status(405).end();
    } else {
        res.status(200).json({ success: true, data: catfacts });
    }
}
*/


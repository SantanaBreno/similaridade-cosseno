const express = require('express')
const app = express()
const PORT = 3000

restaurantes = [
    {id: 1, features: [0.6, 0.1, 0.2, 0.1]},
    {id: 2, features: [0.3, 0.4, 0.2, 0.1]},
    {id: 3, features: [0.7, 0.2, 0.05, 0.05]}
]

function cosineSimilarity(vec1, vec2) {
    const dotProduct = vec1.reduce((sum, val, idx) => sum + val * vec2[idx], 0);
    const magnitude1 =  Math.sqrt(vec1.reduce((sum, val) => sum + val * val, 0));
    const magnitude2 =  Math.sqrt(vec2.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitude1 *  magnitude2);
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/', (req, res) => {
    userVector =  req.body.vector
    
    const recommendations = restaurantes.map(restaurante => ({
        id: restaurante.id,
        similarity: cosineSimilarity(userVector, restaurante.features),
    }))
    .sort((a, b) => b.similarity - a.similarity);

    res.json(recommendations)
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
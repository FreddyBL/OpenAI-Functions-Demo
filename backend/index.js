import express from "express"
import cors from "cors"
import "dotenv/config"

const app = express();
const port = 3200;
const openAiApiKey = process.env.OPENAI_API_KEY;

app.use(express.json());
app.use(cors())
app.post('/api', async (req, res) => {
    // will add logic here.
});


app.listen(port, () => {
    if(!openAiApiKey){
        throw new Error("Make sure to add your OPENAI_API_KEY to the .env file!");
    }
    console.log(`Server is running on port ${port}!`);
});
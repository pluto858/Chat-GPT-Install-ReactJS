const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const configuration = new Configuration({
    organization: "org-DFkDzp3p29w9y9j7THHrZ1Cf",
    apiKey: "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",

});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// add body parser and cors to express


// app.use(express.json())
// app.use(express.urlencoded({ extended: true}))


async function callApi(){
    
}


// create a simple express api that calls the function above


const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 3080

app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(message, "message")
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });

app.get('/models', async (req, res) => {
    const response = await openai.listEngines();
    console.log(response.data.data)
    res.json({
        models: response.data.data
    })

});
      
    res.json({
        // data: response.data
        message: response.data.choices[0].text,
    })
});

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
        
});
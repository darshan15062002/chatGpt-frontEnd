import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";


type ResponseData = {
    text: string;
};

interface GernerateNextApiRequest extends NextApiRequest {
    body: {
        prompt: string;
    };
}

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

export default async function handler(req: GernerateNextApiRequest,res: NextApiResponse<ResponseData>) {
    const Prompt = req.body.prompt;
    
    
    if (!Prompt || Prompt === "") {
        return res.status(400).json({text: "please enter input"})
    }
    console.log(Prompt);
    const aiResult = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${Prompt}`,
        max_tokens: 2048,
        temperature: 0.8,
       
    }).catch(err => {console.log(err)});
    console.log(aiResult?.data.choices[0].text?.trim());
    
    const response =aiResult?.data.choices[0].text?.trim() || "sorry there was an error";
   
    
    res.status(200).json({text:response});
}

import Assistant from "../models/assistant.model.js";
import { geminiResponse } from "../config/Gemini.js";
import moment from 'moment'
 
export const createAssistant = async (req, res) => {
  try {
    const { userId } = req.auth();  
    const existingAssistant = await Assistant.findOne({ userId });
    console.log(existingAssistant);
    
    if (existingAssistant) {
      return res.status(400).json({
        success: false,
        message: "You have already created an assistant",
      });
    }

    const { assistantName, assistantImage,name } = req.body;

    if (!assistantName) {
      return res.status(400).json({ error: "Assistant name required" });
    }

    const assistant = await Assistant.create({
      name,
      userId,
      assistantName,
      assistantImage,
    });

    res.status(201).json({
      success: true,
      message: `${assistantName} created successfully`,
      assistant,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const askToAi = async (req,res)=>{
  try {
    const {userInput} = req.body;
    console.log("User input ",userInput);
    
    const { userId } = req.auth();  
    const user = await Assistant.findOne({ userId });
    const result = await geminiResponse(userInput, user.name||"User", user.assistantName)
    const jsonMatch = result.match(/{[\s\S]*}/)
    if(!jsonMatch){
      return res.json({response:"Sorry, I can not undersatnd"})
    }

    const actualResult = JSON.parse(jsonMatch[0])
    const {type} = actualResult;
    switch(type){
      case "get_date" :  return res.json({
        type,
        userInput:actualResult.userinput,
        response:`Current date is ${moment().format("YYYY-MM-DD")}`
      })

      case "get_time" :  return res.json({
        type,
        userInput:actualResult.userinput,
        response:`Current time is ${moment().format("hh:mm A")}`
    })

    case "get_day" :  return res.json({
        type,
        userInput:actualResult.userinput,
        response:`Today is ${moment().format("dddd")}`
    })

    case "get_month" :  return res.json({
        type,
        userInput:actualResult.userinput,
        response:`Current month is ${moment().format("MMMM")}`
    })

      case "google_search":
      case "youtube_search":
      case "youtube_play":
      case "calculator_open":
      case "instagram_open":
      case "facebook_open":
      case "weather_show":
      case "open_whatsapp":
      case "open_gmail":
      case "set_alarm":
      case "open_youtube":
      case "open_browser":
        case "general":
        return res.json({
          type,
          userInput:actualResult.userinput,
          response:actualResult.response,
        })

        default : return res.json({response:"I did not understad this, Please try again"})

  }
  } catch (error) {
    console.log(error.message);
  }
}
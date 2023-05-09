import React, { useState } from "react";
import axios from "axios";
import "./ChatGpt.css";
import List from "@mui/material/List";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import CachedIcon from '@mui/icons-material/Cached';
import MicOffIcon from '@mui/icons-material/MicOff';
import Tooltip from '@mui/material/Tooltip';
import NavBar from "../shared/NavBar";

const appId = "d00bf9f5-b6f7-48b4-8199-5637b1094106";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:3001/chat/chat";
  const [responses, setResponses] = useState([]);
  const [prompts, setPrompts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt === "" && transcript === "") {
      setResponse("Ask me something");
    } else if (prompt) {
      axios
        .post(`${HTTP}`, { prompt })
        .then((res) => {
          setResponse(res.data);
          setResponses([...responses, res.data]);
          setPrompts([...prompts, prompt]);
          console.log(prompt);
        })
        .catch((error) => {
          console.log(error);
        });

      setPrompt("");
    } else if (transcript) {
      axios
        .post(`${HTTP}`, { prompt: transcript })
        .then((res) => {
          setResponse(res.data);
          setResponses([...responses, res.data]);
          setPrompts([...prompts, prompt]);
          console.log(prompt);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  const reversedResponses = responses.reverse();
  //voice recognition
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition({});
  const startListening = () => {
    resetTranscript();
    setPrompt("");
    SpeechRecognition.startListening({ continuous: true });
  };
  const stopListening = () => {
    SpeechRecognition.stopListening();
    console.log(prompt);
    //handleSubmit();
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    >
        <NavBar />
      <div
        className="containerchat container-sm p-2 bg-lightGrey"
        style={{
          borderRadius: "10px",
          marginTop: "120px",
          maxWidth: "800px",
          padding: "10px",
          boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
        }}
      >
        <div className="d-flex ">
          <h1 className="title text-center text-darkGreen mb-1">
           Chat with me 
          </h1>
        </div>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            height: 400,
            "& ul": { padding: 0 },
          }}
        >
          <div className="conv">
            {responses.map((response) => (
              <div className="bg-darkGreen mt-2 p-1 border-5" key={response}>
                <ul className="text-light" style={{ marginBottom: 0 }}>
                  {response ? response : "Ask me anything..."}
                </ul>
              </div>
            ))}
          </div>
        </List>
        <form
          className="form d-flex align-items-center justify-content-between"
          onSubmit={handleSubmit}
          style={{
            marginTop: "10px",
          }}
        >
          <div className="form-group" style={{ marginRight: "10px" }}>
            <input
              className="shadow-sm"
              type="text"
              placeholder="Enter text"
              value={prompt ? prompt : transcript}
              onChange={handlePrompt}
              style={{
                border: "none",
                padding: "10px 20px",
                borderRadius: "20px",
                width: "760px",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>
        </form>
        <div style={
          {
            height:50,
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            paddingTop:20
          }
        }>
          <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"start",
            height:70,
            width:200,
          }}>
           <p style={{fontWeight:"bold"}}> Mic:</p>
            {listening ? (
              <iframe
                src="https://giphy.com/embed/VIfKkSJDf4yroE6QcR"
                width="210"
                 height="120"
                frameBorder="0"
                className="giphy-embed"
              ></iframe>
            ) : (
              <div><Tooltip title="mic is off"><MicOffIcon style={{color:"red"}}/></Tooltip></div>
            )}
          </div>
          <div style={
          {
            height:70,
            display:"flex",
            alignItems:"center",
            justifyContent:"end",
          }
        }>
          <button
            onTouchStart={startListening}
            onMouseDown={startListening}
            onTouchEnd={stopListening}
            onMouseUp={stopListening}
            style={{
              borderRadius: "50%",
              backgroundColor:  "rgb(13, 37, 76)",
              color: "white",
              border: "none",
              height: "40px",
              width: "40px",
              boxShadow: "0px 5px 10px rgba(0,0,0,0.8)",
              outline: "none",
              marginLeft: "10px",
              marginBottom: "10px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
            }}
          >
           <Tooltip title="Hold to talk"><MicIcon /></Tooltip> 
          </button>
          <button
            style={{
              borderRadius: "50%",
              backgroundColor: "rgb(13, 37, 76)",
              color: "white",
              border: "none",
              height: "40px",
              width: "40px",
              boxShadow: "0px 5px 10px rgba(0,0,0,0.8)",
              outline: "none",
              marginLeft: "10px",
              marginBottom: "10px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
             
            }}
            onClick={handleSubmit}
          >
            <Tooltip title="Submit"><SendIcon /></Tooltip>
          </button>
          <button
            style={{
              borderRadius: "50%",
              backgroundColor: "rgb(13, 37, 76)",
              color: "white",
              border: "none",
              height: "40px",
              width: "40px",
              boxShadow: "0px 5px 10px rgba(0,0,0,0.8)",
              outline: "none",
              marginLeft: "10px",
              marginBottom: "10px",
              animation: "spin 1s linear",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
            }}
            onClick={()=>resetTranscript()}
          >
           <Tooltip title="Reset"><CachedIcon /></Tooltip> 
          </button>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

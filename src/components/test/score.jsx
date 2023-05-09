import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
function Score(props) {
    const { trial, quiz } = props;
    const canvasRef = useRef(null);

    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    const userId = user._id;
    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    const [recordedText, setRecordedText] = useState('');
    const [isListening, setIsListening] = useState(false);
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.addEventListener('start', () => {
        console.log('recording started');
        setIsListening(true);
    });

    recognition.addEventListener('result', (event) => {
        const text = event.results[0][0].transcript;
        setRecordedText(text);
    });

    recognition.addEventListener('end', () => {
        console.log('recording stopped');
        setIsListening(false);
    });

    const startRecording = () => {
        recognition.start();
    };

    const stopRecording = () => {
        recognition.stop();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set circle properties
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 2 - 10;
        const startAngle = -Math.PI / 2;
        const endAngle = 2 * Math.PI - Math.PI / 2;

        // Calculate percentage
        const percentage = trial.score / trial.answers?.length;

        // Set color based on percentage
        let color = '#14599D';

        // Draw gray circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle = '#E8F2FF';
        ctx.lineWidth = 10;
        ctx.stroke();

        // Draw colored circle
        if (percentage > 0) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, startAngle + percentage * 2 * Math.PI);
            ctx.strokeStyle = color;
            ctx.stroke();
        }

        // Draw text
        ctx.font = 'bold 70px Arial';
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${trial.score}/${trial.answers?.length}`, centerX, centerY);
        if (trial.answers && trial.score > trial.answers.length / 2) {
            const level = "Intermediate";
            axios.put(`http://localhost:3001/users/classification/${userId}/${level}`);
        } else if (trial.answers && trial.score === trial.answers.length / 2) {
            const level = "Beginner";
            axios.put(`http://localhost:3001/users/classification/${userId}/${level}`);
        } else if (trial.answers && trial.score === trial.answers.length) {
            const level = "Advanced";
            axios.put(`http://localhost:3001/users/classification/${userId}/${level}`);
        } else {
            console.log("this is not the case");
        }


    }, [trial]);



    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '50%',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '2.5rem',
                            fontFamily: 'cursive',
                            color: 'black',
                            fontWeight: 'bold',
                            marginBottom: '26px',
                        }}
                    >
                        {quiz.name}
                    </h1>
                    <canvas ref={canvasRef} width="250" height="250"></canvas>
                    <button
                        style={{
                            border: '3px solid #D0E5F9',
                            backgroundColor: 'white',
                            color: '#14599D',
                            marginTop: '20px',
                        }}
                        onClick={startRecording}
                        disabled={isListening}
                    >
                        Try Again
                    </
                    button>
                </div>
                <div style={{ width: '50%', height: '32rem' }}>
                    <textarea placeholder="Write anything here !" value={recordedText} onChange={(event) => setRecordedText(event.target.value)} style={{ border: '2px solid #14599D', width: '100%', height: '100%', backgroundColor: 'white', color: 'black', fontSize: '1.5rem' }}>
                    </textarea>
                    <FontAwesomeIcon icon={faMicrophone} onClick={startRecording} size="3x" />
                </div>

            </div>

        </>
    );
}

export default Score;
import React, { useEffect, useRef } from 'react';

function Score(props) {
    const { trial, quiz } = props;
    const canvasRef = useRef(null);

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
    }, [trial]);

    return (<>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%' }}>
                <h1 style={{ fontSize: '2.5rem', fontFamily: 'cursive', color: 'black', fontWeight: 'bold', marginBottom: '26px' }}>
                    {quiz.name}
                </h1>
                <canvas ref={canvasRef} width="250" height="250"></canvas>
                <button style={{ border: '3px solid #D0E5F9', backgroundColor: 'white', color: '#14599D', marginTop: '20px' }}>Try Again</button>
            </div>
            <div style={{ width: '50%',height: '32rem' }}>
                <textarea style={{width: '100%', height: '100%', backgroundColor: '#1dbb90', color: 'white', fontSize: '1.5rem'}}></textarea>
            </div>
        </div>

    </>
    );
}

export default Score;
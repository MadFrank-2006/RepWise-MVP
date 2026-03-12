import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../index.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className = "flex flex-col items-center justify-center max-w-xl mx-auto space-y-6 h-screen">
            <button
                onClick = {() => navigate("/workout")}
                className = "bg-blue-500 text-white px-6 py-3 rounded"
            >
                Start Workout
            </button>
        </div>
    );
}

export default Home;
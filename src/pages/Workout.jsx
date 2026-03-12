import React, {useState, useEffect} from 'react';
import ExerciseCard from '../components/ExerciseCard';

function Workout() {
    const [exercises, setExercises] = useState([]);

    const addExercise = () => {
        setExercises([...exercises, {
            id: Date.now(),
            name: "",
            sets: [],
            weight: "",
            reps: ""
        }]);
    }

    return (
        <div className="p-6 max-w-xl mx-auto space-y-6">
            <div className="space-y-4">
                {exercises.map((exercise) => (
                    <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                        setExercises={setExercises}
                        exercises={exercises}
                    />
                ))}
            </div>
            <button
                className="bg-green-500 text-white w-full mt-4 px-4 py-2 rounded"
                onClick={addExercise}
            >
                Add Exercise
            </button>
        </div>
    );
}

export default Workout;
import React, {useState, useEffect} from 'react';

function ExerciseCard({ exercise, exercises, setExercises }) {

    const updateName = (e) => {
        setExercises(exercises.map((ex) => 
            ex.id === exercise.id ? {...ex, name: e.target.value } : ex)
        )
    };

    const updateWeight = (e) => {
        setExercises(exercises.map((ex) =>
            ex.if === exercise.id ?)
        )
    }

    const addSet = () => {
        setExercises(exercises.map((ex) => 
            ex.id === exercise.id ? { ...ex, sets: [...ex.sets, { id: Date.now(), reps: "", weight: ""}]} : ex));
    };

    return (
        <div className="border p-4 rounded">
            <input
                placeholder="Exercise Name"
                value={exercise.name}
                onChange={updateName}
                className="border p-2 w-full mb-3"
            />
            {exercise.sets.map((set) => (
                <div key={set.id} className="flex gap-2 mb-2">
                    <input 
                        placeholder="Weight"
                        value={set.weight}
                        onChange={updateWeight}
                        className="border p-2"
                    />
                    <input 
                        placeholder="Reps"
                        value={set.reps}
                        onChange={updateReps}
                        className="border p-2"
                    />
                </div>
            ))}
            <button
                onClick={addSet}
                className="bg-gray-500 text-white px-3 py-1 rounded mt-2"
            >
                Add Set
            </button>
        </div>
    );
}

export default ExerciseCard;
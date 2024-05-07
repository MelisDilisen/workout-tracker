import { useState } from "react";

export default function Form({ onAddExercises }) {
  const [description, setDescription] = useState("");
  const [reps, setReps] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newExercise = { description, reps, done: false, id: Date.now() };
    console.log(newExercise);

    onAddExercises(newExercise);

    setDescription("");
    setReps(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What exercises would you like to do</h3>
      <select value={reps} onChange={(e) => setReps(Number(e.target.value))}>
        {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Type of Exercise..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

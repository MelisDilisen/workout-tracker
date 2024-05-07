import { useState } from "react";
import Exercise from "./Exercise";

export default function ExerciseList({
  exercises,
  onDeleteExercise,
  onToggleExercise,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedExercises;

  if (sortBy === "input") sortedExercises = exercises;
  if (sortBy === "description")
    sortedExercises = exercises
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "done")
    sortedExercises = exercises
      .slice()
      .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className="list">
      <ul>
        {sortedExercises.map((exercise) => (
          <Exercise
            exercise={exercise}
            onDeleteExercise={onDeleteExercise}
            onToggleExercise={onToggleExercise}
            key={exercise.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by the input order</option>
          <option value="description">Sort by description</option>
          <option value="done">Sort by the done status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default function Exercise({
  exercise,
  onDeleteExercise,
  onToggleExercise,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={exercise.done}
        onChange={() => onToggleExercise(exercise.id)}
      />
      <span style={exercise.done ? { textDecoration: "line-through" } : {}}>
        {exercise.reps} {exercise.description}
      </span>
      <button onClick={() => onDeleteExercise(exercise.id)}>❌</button>
    </li>
  );
}

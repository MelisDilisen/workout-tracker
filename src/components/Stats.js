export default function Stats({ exercises }) {
  if (!exercises.length)
    return (
      <p className="stats">
        Start adding some exercises to your list by filling the form
      </p>
    );
  const numExercises = exercises.length;
  const numDone = exercises.filter((exercise) => exercise.done).length;
  const percentage = Math.round((numDone / numExercises) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "You've completed all your exercises."
        : `You have ${numExercises} exercises on your to do list, and you already
        finished ${numDone} (${percentage}%)`}
    </footer>
  );
}

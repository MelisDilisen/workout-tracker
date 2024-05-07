import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import ExerciseList from "./ExerciseList";
import Stats from "./Stats";

export default function App() {
  const [exercises, setExercises] = useState([]);

  function handleAddExercises(exercise) {
    setExercises((exercises) => [...exercises, exercise]);
  }

  function handleDeleteExercise(id) {
    setExercises((exercises) =>
      exercises.filter((exercise) => exercise.id !== id)
    );
  }

  function handleToggleExercise(id) {
    setExercises((exercises) =>
      exercises.map((exercise) =>
        exercise.id === id ? { ...exercise, done: !exercise.done } : exercise
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all exercises on the list?"
    );
    if (confirmed) setExercises([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddExercises={handleAddExercises} />
      <ExerciseList
        exercises={exercises}
        onDeleteExercise={handleDeleteExercise}
        onToggleExercise={handleToggleExercise}
        onClearList={handleClearList}
      />
      <Stats exercises={exercises} />
    </div>
  );
}

import { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", score: 85 },
    { id: 2, name: "Bob Smith", score: 35 }
  ]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: parseInt(score)
    };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, score: parseInt(newScore) || 0 } : s
    ));
  };

  return (
    <div className="container">
      <Header />
      <AddStudentForm onAdd={addStudent} />
      <StudentTable students={students} onUpdate={updateScore} />
    </div>
  );
}

export default App;
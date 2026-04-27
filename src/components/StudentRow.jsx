import React from 'react';

const StudentRow = ({ student, onUpdate }) => {
  // Logic for Pass/Fail based on score requirement (Pass >= 40)
  const isPassing = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        {/* Input field to update score dynamically */}
        <input 
          type="number" 
          value={student.score} 
          onChange={(e) => onUpdate(student.id, e.target.value)} 
        />
      </td>
      {/* Conditional styling: Green for pass, Red for fail */}
      <td className={isPassing ? "pass" : "fail"}>
        {isPassing ? "Pass" : "Fail"}
      </td>
    </tr>
  );
};

export default StudentRow;
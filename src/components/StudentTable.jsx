import React from 'react';
import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdate }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* Iterate through students array and render a StudentRow for each */}
        {students.map((student) => (
          <StudentRow 
            key={student.id} 
            student={student} 
            onUpdate={onUpdate} 
          />
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
import React from 'react';

function App() {
  const students = [
    { name: 'Alice', age: 17, grade: 'A' },
    { name: 'Bob', age: 18, grade: 'B' },
    { name: 'Charlie', age: 16, grade: 'C' },
    { name: 'Diana', age: 19, grade: 'D' },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((item) => {
    return item.age >= 18;
  });

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map((student) => {
          return (
            <div>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    alert(student.name);
                  }}
                >
                  {student.name}
                </a>
                <p>{student.age}</p>
                <p>{student.grade}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

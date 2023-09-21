function graduates(students) {
    let result = {};
  
    for (let i = 0; i < students.length; i++) {
      let student = students[i];
  
      if (student.score > 75) {
        if (!result[student.class]) {
          result[student.class] = [];
        }
  
        let studentsInfo = {
          name: student.name,
          score: student.score,
        };
  
        result[student.class].push(studentsInfo);
      }
    }
  
    return result;
  }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'Math'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'Science'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'Math'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'Science'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'Art & Design'
    }
  ]));
  
  console.log(graduates([]));
  
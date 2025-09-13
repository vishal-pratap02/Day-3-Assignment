//Student Grade Checker
const students = [
  { name: "Aarav Sharma", rollno: 1, marks: 85 },
  { name: "Ishita Verma", rollno: 2, marks: 78 },
  { name: "Rohan Gupta", rollno: 3, marks: 92 },
  { name: "Ananya Singh", rollno: 4, marks: 88 },
  { name: "Kabir Mehta", rollno: 5, marks: 74 },
  { name: "Sneha Nair", rollno: 6, marks: 81 },
  { name: "Aditya Rao", rollno: 7, marks: 95 },
  { name: "Priya Iyer", rollno: 8, marks: 69 },
  { name: "Vivaan Kapoor", rollno: 9, marks: 87 },
  { name: "Kavya Reddy", rollno: 10, marks: 91 },
  { name: "Manav Choudhary", rollno: 11, marks: 76 },
  { name: "Ritika Das", rollno: 12, marks: 89 },
  { name: "Arjun Yadav", rollno: 13, marks: 84 },
  { name: "Meera Pillai", rollno: 14, marks: 93 },
  { name: "Siddharth Malhotra", rollno: 15, marks: 72 },
  { name: "Neha Kulkarni", rollno: 16, marks: 90 },
  { name: "Krishna Patel", rollno: 17, marks: 68 },
  { name: "Simran Bhatia", rollno: 18, marks: 82 },
  { name: "Rahul Mishra", rollno: 19, marks: 79 },
  { name: "Pooja Joshi", rollno: 20, marks: 96 }
];


let totalStudents = students.length;

const getRandomstudent = () =>  students[Math.floor(Math.random()*totalStudents)];
const student = getRandomstudent();
const gradeCalculation = (marks) => {

    if(marks >= 90)
        return 'A';
    else if(marks >= 75)
        return 'B';
    else if(marks >= 50)
        return 'C';
    else
        return 'F';
}

const grade = gradeCalculation(student.marks);

const showResult = (student) => {
    console.log(student, "Grade : ", grade);
}


if(totalStudents == 0)
    console.log("No students found!");
else
    showResult(student);










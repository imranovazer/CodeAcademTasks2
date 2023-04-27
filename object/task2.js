const giveJobToStudent = (student, jobName) => {

    console.log(`Congratulations! Student ${student.fullName} has a new job! It is now ${jobName}`)
    return { ...student, job: jobName }
}

const student = {

    fullName: 'Maxim',

    experienceInMonths: 12,

    stack: ['HTML', 'CSS', 'JavaScript', 'React'],

}



const updatedStudent = giveJobToStudent(student, 'web developer');

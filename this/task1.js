const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level = this.level + 1;
        switch (this.level) {
            case 1:
                break;
            case 2:
                this.stack.push('CSS')
                break;
            case 3:
                this.stack.push('JavaScript');
                break;
            case 4:
                this.stack.push('React');
                break;
            case 5:
                this.stack.push('Node Js');

                break;

            default:
                alert('The student has learned all technologies!');
                break;
        }
        return this;
    }

}

console.log(student)

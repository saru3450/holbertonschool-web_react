namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }

    export class Subject {
        teacher: Teacher;

        constructor() {
            // Initialise teacher à une valeur par défaut ou à undefined
            this.teacher = { firstName: '', lastName: '' };
        }

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}

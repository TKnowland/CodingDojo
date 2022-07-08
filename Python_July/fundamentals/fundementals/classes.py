

class Student:
    # constructor method
    def __init__(self, first_name, last_name, age, instructor, course):
        # Attributes
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.instructor = instructor
        self.course = course
    #method
    def print_info(self):
        print(f"Name: {self.first_name} {self.last_name}")
        print(f"Age: {self.age}")
        print(f"Instructor: {self.instructor}")
        print(f"Course: {self.course}")


class Course:
    def __init__(self, data):
        self.name = data["name"]
        self.instructors = data["instructors"]
        self.program = data["program"]
    def print_instructo_list(self):
        for instructor in self.instructors:
            print(instructor)
    def update_instructor(self, new_name, index):
        if index < len(self.instructors):
            self.instructors[index] = new_name
    def print_info(self):
        print(f"Name: {self.name}")
        print(f"Program: {self.program}")
        self.print_instructo_list()

python = {
    "name": "Python/Flask",
    "instructors": ["Alfredo", "Spencer", "Tyler"],
    "program": "Full-Stack"
}

course_python = Course(python)

course_python.print_info()
course_python.update_instructor("Ryan", 2)
course_python.print_info()

student_shlingo = Student( "Shlingo", "Balphameer", 12, "Alfredo", "Python")

student_shlingo.print_info()
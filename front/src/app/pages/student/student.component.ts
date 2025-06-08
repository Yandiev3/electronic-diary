import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from "../../common-ui/menu/menu.component";
import { RouterModule } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent implements OnInit {
  showModal = false;
  students: any[] = [];
  newStudent = {
    name: '',
    lastname: '',
    patronymic: '',
    email: '',
    number: '',
    group: ''
  };

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe({
      next: (data: any) => this.students = data,
      error: (err) => console.error('Ошибка загрузки студентов:', err)
    });
  }

  addStudent() {
    this.studentService.addStudent(this.newStudent).subscribe({
      next: () => {
        this.showModal = false;
        this.resetForm();
        this.loadStudents();
      },
      error: (err) => console.error('Ошибка добавления:', err)
    });
  }

  resetForm() {
    this.newStudent = {
      name: '',
      lastname: '',
      patronymic: '',
      email: '',
      number: '',
      group: ''
    };
  }
}
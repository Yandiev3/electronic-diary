import { Component, NgModule, OnInit } from '@angular/core';
import { GradeService } from '../../service/grade.service';
import { StudentService } from '../../service/student.service';
import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grade-journal',
  templateUrl: './grade-journal.component.html',
  styleUrls: ['./grade-journal.component.scss'],
  imports: [DatePipe, NgFor, CommonModule, FormsModule ],
  standalone: true
})
export class GradeJournalComponent implements OnInit {
  grades: any[] = [];
  students: any[] = [];
  subjects: string[] = ['Математика', 'Физика', 'Информатика', 'Литература'];
  
  // Переменные для формы добавления оценки
  selectedStudentId: string = '';
  selectedSubject: string = '';
  newGrade: number | null = null;
  newComment: string = '';

  // Переменные для фильтрации
  filterStudentId: string = '';
  filterSubject: string = '';

  constructor(
    private gradeService: GradeService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.loadStudents();
    this.loadAllGrades();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe({});
  }

  loadAllGrades() {
    this.gradeService.getAllGrades().subscribe({
      next: (grades) => this.grades = grades,
      error: (err) => console.error('Ошибка загрузки оценок:', err)
    });
  }

  loadFilteredGrades() {
    if (this.filterStudentId) {
      this.gradeService.getStudentGrades(this.filterStudentId).subscribe({
        next: (grades) => this.grades = grades,
        error: (err) => console.error('Ошибка загрузки оценок:', err)
      });
    } else if (this.filterSubject) {
      this.gradeService.getSubjectGrades(this.filterSubject).subscribe({
        next: (grades) => this.grades = grades,
        error: (err) => console.error('Ошибка загрузки оценок:', err)
      });
    } else {
      this.loadAllGrades();
    }
  }

  addGrade() {
    if (this.selectedStudentId && this.selectedSubject && this.newGrade) {
      const gradeData = {
        studentId: this.selectedStudentId,
        subject: this.selectedSubject,
        grade: this.newGrade,
        comment: this.newComment
      };

      this.gradeService.addGrade(gradeData).subscribe({
        next: () => {
          // Сброс формы
          this.selectedStudentId = '';
          this.selectedSubject = '';
          this.newGrade = null;
          this.newComment = '';
          
          // Обновление списка оценок
          this.loadFilteredGrades();
        },
        error: (err) => console.error('Ошибка добавления оценки:', err)
      });
    }
  }

  clearFilters(){

  }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private apiUrl = 'http://localhost:5000/grade';

  constructor(private http: HttpClient) {}

  getAllGrades(){
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getStudentGrades(studentId: string){
    return this.http.get<any[]>(`${this.apiUrl}/student/${studentId}`);
  }

  getSubjectGrades(subject: string){
    return this.http.get<any[]>(`${this.apiUrl}/subject/${subject}`);
  }

  addGrade(gradeData: any){
    return this.http.post(`${this.apiUrl}/add`, gradeData);
  }
}
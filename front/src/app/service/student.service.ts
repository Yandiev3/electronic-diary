import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  apiUrl = "http://localhost:5000/student";

  constructor(private http: HttpClient) {}

  addStudent(studentData: any) {
    return this.http.post(`${this.apiUrl}/add`, studentData);
  }

  getStudents() {
    return this.http.get(`${this.apiUrl}/users`);
  }
}
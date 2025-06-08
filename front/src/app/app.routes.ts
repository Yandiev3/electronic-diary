import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { StudentComponent } from './pages/student/student.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { SettingComponent } from './pages/setting/setting.component';
import { GradeJournalComponent } from './pages/grade-journal/grade-journal.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'login', component: LoginComponent},
    {path: 'student', component:StudentComponent},
    {path: 'grade', component: GradeJournalComponent},
    {path: 'setting', component: SettingComponent}
];

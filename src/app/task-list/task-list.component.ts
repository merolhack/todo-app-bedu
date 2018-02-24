import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from '@firebase/util';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  private TaskCollection: AngularFirestoreCollection<any>;
  public tasks;
  public taskModel = {
    text: ''
  };

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore
  ) {

  }

  ngOnInit() {
    this.authService.user
      .subscribe(user => {
        console.log('user.uid:', user.uid);
        this.TaskCollection = this.afs.collection(`lists/${user.uid}/tasks`);
        this.tasks = this.TaskCollection.snapshotChanges()
          .map(actions => {
            console.log('actions:', actions);
            return actions.map((action) => ({
              $key: action.payload.doc.id,
              ...action.payload.doc.data()
            }))
          });
      });
  }

  public addTask() {
    this.TaskCollection.add({
      text: this.taskModel['text'],
      done: false
    })
  }

  public updateTask(task) {
    console.log('task:', task);
    this.TaskCollection.doc(task.$key).update(
      {done: task.done}
    );
  }

  public deleteTask(task) {
    this.TaskCollection.doc(task.$key).delete();
  }

}

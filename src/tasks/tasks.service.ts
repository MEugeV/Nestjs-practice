import { Injectable } from '@nestjs/common';
import { Task } from './interfases/Task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {} //necesita alcance (private) para ver las props del modelo. Nombre = tasks.module

  async getTasks() {
    return await this.taskModel.find();
  }
  async getTask(id: string) {
    return await this.taskModel.findById(id);
  }
  async createTask(task: CreateTaskDto) {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }
  async updateTask(task: CreateTaskDto, id: string) {
    const updatedTask = await this.taskModel.findByIdAndUpdate(id, task, {
      new: true,
    });
    return updatedTask;
  }
  async deleteTask(id: string) {
    const deletedTask = await this.taskModel.findByIdAndDelete(id);
    return deletedTask;
  }

  //   tasks: Task[] = [
  //     {
  //       id: 1,
  //       description: 'Tests',
  //       done: false,
  //     },
  //       title: 'Testing',
  //     {
  //       id: 2,
  //       title: 'Testing2',
  //       description: 'Tests',
  //       done: false,
  //     },
  //     {
  //       id: 3,
  //       title: 'Testing3',
  //       description: 'Tests',
  //       done: false,
  //     },
  //   ];
  //   getTasks(): Task[] {
  //     return this.tasks;
  //   }
  //   getTask(id: number): Task {
  //     return this.tasks.find((task) => task.id === id);
  //   }
}

package models

import (
	`time`
)

type Task struct {
    ID         int       `json:"id" gorm:"primaryKey"`
    Title      string    `json:"title" gorm:"not null"`
    IsDone     bool      `json:"isDone" gorm:"not null"`
    TimeLimit  time.Time `json:"timeLimit" gorm:"not null"`
    TaskDetail string    `json:"taskDetail" gorm:"not null"`
}


func GetAllTasks() ([]Task,error) {
  var tasks []Task
  if err := DB.Find(&tasks).Error; err != nil {
    return nil, err
  }
  return tasks, nil
}

func CreateTask(task *Task) error {
    return DB.Create(task).Error
}

func UpdateTask(task *Task) error {
    return DB.Save(task).Error
}

func DeleteTask(id uint) error {
    return DB.Delete(&Task{}, id).Error
}


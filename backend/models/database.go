package models

import (
	"fmt"
	"log/slog"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func SetDatabase(database *gorm.DB) {
	DB = database
}
func ConnectDatabase() {
	var err error
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"),
	)
	
	slog.Error("Connecting to database with DSN: %s", dsn)

	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		slog.Error("Could not connect to the database: %v", err)
	}

	DB.AutoMigrate(&Task{})
}

func ResetDatabase() {
	DB.Exec("DROP DATABASE IF EXISTS task_list")
	DB.Exec("CREATE DATABASE task_list")
	ConnectDatabase()
}

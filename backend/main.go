package main

import (
	"backend/middleware"
	"backend/models"
	"backend/routes"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)


func init() {
    // .env ファイルを読み込む
    err := godotenv.Load()
    if err != nil {
        log.Fatalf("Error loading .env file")
    }
}

func main() {
	fmt.Println("Hello, World!")
	router := gin.Default()

	router.Use(middleware.CORSMiddleware())

	models.ConnectDatabase()
	// データベースに接続
	models.SetDatabase(models.DB)
	// ルートを設定
	routes.RegisterTaskRoutes(router)

	router.Run(":8000")
}

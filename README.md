# This is tutorial app

```
cd backend
touch .env
```

ローカルのmysqlでtodo_appというDBを作成してください
.envには次の内容を書き込んでください

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todo_app
```

エントリーポイントは次の通りです

```
go run main.go
npm run dev
```



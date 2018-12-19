package main

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"github.com/philbrookes/sprintbotio-web/pkg/api"
	"github.com/philbrookes/sprintbotio-web/pkg/web"
	"github.com/sirupsen/logrus"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {
	portString := "8080"
	router := mux.NewRouter()
	if v, ok := os.LookupEnv("WEB_PORT"); ok {
		portString = v
	}

	con, err := sql.Open("mysql", os.Getenv("MYSQL_USER")+":"+os.Getenv("MYSQL_PASS")+"@/mysql")
	if err != nil {
		panic(err)
	}
	defer con.Close()

	err = setupDb(con, os.Getenv("MYSQL_DATABASE"), os.Getenv("SCHEMA_FILE"))
	if err != nil {
		panic(err)
	}


	apiHandler := api.NewHandler(con)
	apiHandler.RegisterRoutes(router)

	// must be last as it acts as a catch-all route
	web.RegisterRoutes(router)

	logrus.Infof("starting server")
	logrus.Fatal(http.ListenAndServe(":"+portString, router))
	logrus.Infof("Listening on port: :%v", portString)
}

func setupDb(con *sql.DB, db, file string) error {
	contents, err := ioutil.ReadFile(file)
	if err != nil {
		return err
	}

	_, err = con.Exec("CREATE DATABASE IF NOT EXISTS " + db)
	if err != nil {
		return err
	}

	_, err = con.Exec("USE " + db)
	if err != nil {
		return err
	}

	_, err = con.Exec(string(contents))
	if err != nil {
		return err
	}
	return nil
}
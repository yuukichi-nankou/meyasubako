package main

import (
    "log"
    "net/http"
)

func main() {
    fs := http.FileServer(http.Dir("dist"))
    http.Handle("/", fs)

    log.Println("Listening...")
    http.ListenAndServe("127.0.0.1:8000", nil)
}

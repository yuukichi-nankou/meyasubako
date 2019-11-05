package main

import (
    "log"
    "net/http"
)

func main() {

    fs := http.FileServer(http.Dir("contents"))
    // contents ディレクトリ以下のファイルを表示する
    http.Handle("/", fs)

    log.Println("Listening...")
    // 8000ポートでサーバーを立ち上げる
    http.ListenAndServe("127.0.0.1:8000", nil)
}

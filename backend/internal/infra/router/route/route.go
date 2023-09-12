package route

import "net/http"

type Route struct {
	Uri     string
	Method  string
	Handler func(http.ResponseWriter, *http.Request)
	Admin   bool
}

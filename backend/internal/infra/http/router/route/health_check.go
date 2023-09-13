package route

import (
	"net/http"

	"github.com/charmingruby/wisp/internal/infra/http/handler"
)

var healthCheckRoutes = []Route{
	{
		Uri:     "/health-check",
		Method:  http.MethodGet,
		Handler: handler.HealthCheckHandler,
		Admin:   false,
	},
}

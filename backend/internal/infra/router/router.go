package router

import (
	"github.com/gin-gonic/gin"
)

func Initialize() {
	r := gin.Default()

	r.GET("/health-check", func(c *gin.Context) {
		c.JSON(
			200, gin.H{
				"message": "Ok!",
			},
		)
	})

	r.Run(":8000")
}

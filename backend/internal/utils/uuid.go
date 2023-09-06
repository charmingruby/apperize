package utils

import "github.com/google/uuid"

func GenerateUUID() string {
	id := uuid.New()
	parsedId := id.String()

	return parsedId
}

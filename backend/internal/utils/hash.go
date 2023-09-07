package utils

import (
	"golang.org/x/crypto/bcrypt"
)

func GenerateValueHash(value string) string {
	hashedValueInBytes, _ := bcrypt.GenerateFromPassword([]byte(value), bcrypt.DefaultCost)
	hashedValue := string(hashedValueInBytes)
	return hashedValue
}

func CompareHashWithValue(hash, value string) bool {
	hashInBytes := []byte(hash)
	valueInBytes := []byte(value)

	err := bcrypt.CompareHashAndPassword(hashInBytes, valueInBytes)

	return err == nil
}

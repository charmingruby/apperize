package bcrypt

import (
	"golang.org/x/crypto/bcrypt"
)

func GenerateValueHash(value string) string {
	hashedValueInBytes, _ := bcrypt.GenerateFromPassword([]byte(value), bcrypt.DefaultCost)
	hashedValue := string(hashedValueInBytes)
	return hashedValue
}

func CompareHashWithValue(hash string, value string) error {
	hashInBytes := []byte(hash)
	valueInBytes := []byte(value)

	err := bcrypt.CompareHashAndPassword(hashInBytes, valueInBytes)

	if err != nil {
		return err
	}

	return nil
}

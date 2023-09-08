package util

import (
	"math/rand"
	"strings"
	"time"
)

const alphabet = "abcdefghijklmnopqrstuvwxyz"

func init() {
	rand.Seed(time.Now().UnixNano())
}

// Generates an integer between min and max.
func RandomInt(min, max int64) int64 {
	return min + rand.Int63n(max-min+1)
}

// Generates a string with n characters.
func RandomString(n int) string {
	var sb strings.Builder

	k := len(alphabet)

	for i := 0; i < n; i++ {
		c := alphabet[rand.Intn(k)]

		sb.WriteByte(c)
	}

	return sb.String()
}

func RandomName() string {
	return RandomString(7)
}

func RandomLastName() string {
	return RandomString(7)
}

func RandomEmail() string {
	return RandomString(7) + "@email.com"
}

func RandomPassword() string {
	return RandomString(10)
}

func RandomRole() string {
	return RandomString(5)
}

func RandomOccupationArea() string {
	return RandomString(8)
}

func RandomGithubUser() string {
	return RandomString(8)
}

func RandomAvatarUrl() string {
	return RandomString(12)
}

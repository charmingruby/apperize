package entity

import "time"

type Customer struct {
	ID        string
	Name      string
	LastName  string
	Email     string
	Birthdate time.Time
	Password  string
	CreatedAt time.Time
}

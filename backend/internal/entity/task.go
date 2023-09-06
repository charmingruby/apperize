package entity

import "time"

type Task struct {
	ID          string
	Title       string
	Description string
	AssignedTo  string
	ServiceId   string
	FinishedAt  time.Time
	CreatedAt   time.Time
}

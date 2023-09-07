package entity

import "time"

type Request struct {
	ID            string
	ServiceNeeded string
	Description   string
	CustomerID    string
	ReportID      string
	CreatedAt     time.Time
}

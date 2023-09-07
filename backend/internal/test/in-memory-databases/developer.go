package inmemorydatabases

import (
	"errors"

	"github.com/charmingruby/wisp/internal/domain/entity"
)

type DevelopersInMemoryDatabase struct {
	Devs []*entity.Developer
}

func NewDevelopersInMemoryDatabase() *DevelopersInMemoryDatabase {
	emptyDevelopersList := []*entity.Developer{}

	return &DevelopersInMemoryDatabase{
		Devs: emptyDevelopersList,
	}
}

func (r *DevelopersInMemoryDatabase) Store(dev *entity.Developer) {
	r.Devs = append(r.Devs, dev)
}

func (r *DevelopersInMemoryDatabase) GetByEmail(email string) (*entity.Developer, error) {
	var devToFind entity.Developer

	for _, dev := range r.Devs {
		if devToFind.Email == dev.Email {
			devToFind.Name = dev.Name
			devToFind.LastName = dev.LastName
			devToFind.Email = dev.Email
			devToFind.Password = dev.Password
			devToFind.AvatarUrl = dev.AvatarUrl
			devToFind.Role = dev.Role
			devToFind.GithubUser = dev.GithubUser
			devToFind.OccupationArea = dev.OccupationArea
			devToFind.CreatedAt = dev.CreatedAt

			return &devToFind, nil
		}
	}

	return nil, errors.New("developer not found")
}

package inmemorydatabases

import (
	"github.com/charmingruby/wisp/internal/domain/entity"
	exceptions "github.com/charmingruby/wisp/internal/domain/exception"
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
		if email == dev.Email {
			devToFind.ID = dev.ID
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

	return nil, exceptions.NotFoundError("developer")
}

func (r *DevelopersInMemoryDatabase) GetByGithubUser(githubUser string) (*entity.Developer, error) {
	var devToFind entity.Developer

	for _, dev := range r.Devs {
		if githubUser == dev.GithubUser {
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

	return nil, exceptions.NotFoundError("github user")
}

func (r *DevelopersInMemoryDatabase) GetById(id string) (*entity.Developer, error) {
	var devToFind entity.Developer

	for _, dev := range r.Devs {
		if id == dev.ID {
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

	return nil, exceptions.NotFoundError("id")
}

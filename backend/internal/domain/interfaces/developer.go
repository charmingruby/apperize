package interfaces

import "github.com/charmingruby/wisp/internal/domain/entity"

type DeveloperRepositoryInterface interface {
	Store(developer *entity.Developer)

	GetById(id string) (*entity.Developer, error)
	GetByEmail(email string) (*entity.Developer, error)
	GetByGithubUser(githubUser string) (*entity.Developer, error)
}

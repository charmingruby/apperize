package exception

import "errors"

func InvalidCredentialsError() error {
	return errors.New("invalid credentials")
}

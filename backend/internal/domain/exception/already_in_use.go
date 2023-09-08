package exception

import "errors"

func AlreadyInUseError(field string) error {
	message := "This " + field + " is already in use"

	return errors.New(message)
}

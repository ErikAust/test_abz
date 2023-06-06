import { IUser, IUserRegistration } from "../interfaces";

export const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const emailPattern =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

export const phoneNumberPattern = /^[\+]{0,1}380([0-9]{9})$/;

export enum FieldRequirements {
  minLength = 2,
  maxLength = 60,
  photoWidthHeightMin = 70,
  photoSizeMax = 5000000,
}

export enum ErrorMessages {
  validNameMsg = "Username should contain 2-60 characters",
  validEmailMsg = "User email should be a valid",
  validPhoneMsg = "Number should start with code of Ukraine +380 and 9 digits",
  validPhotoMsg = "The photo should be min 70x70px and not greater than 5 Mb",
}

export const initialUserState: IUserRegistration = {
  name: "",
  email: "",
  phone: "",
  position_id: 1,
  photo: null,
};

export const sortByDate = (array: IUser[]) => {
  return array.sort((a: IUser, b: IUser) => {
    const dateA = a.registration_timestamp
      ? new Date(a.registration_timestamp * 1000)
      : null;
    const dateB = b.registration_timestamp
      ? new Date(b.registration_timestamp * 1000)
      : null;

    if (dateA && dateB) {
      return dateB.getTime() - dateA.getTime();
    } else if (dateA && !dateB) {
      return -1;
    } else if (!dateA && dateB) {
      return 1;
    } else {
      return 0;
    }
  });
};

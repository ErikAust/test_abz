export interface IButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface IInputProps {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  errorStatus: boolean;
  errorMsg: string;
  helperText?: string;
}

export interface IPhotoProps {
  filename?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorStatus: boolean;
  errorMsg: string;
}

export interface IRadioButtonProps {
  id: number;
  name: string;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export interface IPosition {
  id: number;
  name: string;
}

export interface IUser {
  id?: string;
  photo: string;
  name: string;
  position: string;
  position_id?: string | number;
  email: string;
  phone: string;
  registration_timestamp: number;
}

export interface IUserRegistration {
  name: string;
  email: string;
  phone: string;
  position_id: string | number;
  photo: File | null;
}

interface IErrorItem {
  errorStatus: boolean;
  errorMessage: string;
}

export interface IErrorStates {
  name: IErrorItem;
  email: IErrorItem;
  phone: IErrorItem;
  photo: IErrorItem;
}

export interface IUsersState {
  success: boolean;
  total_pages: number | null;
  total_users: number | null;
  count: number | null;
  page: number | null;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: IUser[];
  loading: boolean;
}

export interface IInitialState {
  successRegistration: boolean;
  positions: IPosition[];
  users: IUsersState;
  error: string | null;
  isLoading: boolean;
}

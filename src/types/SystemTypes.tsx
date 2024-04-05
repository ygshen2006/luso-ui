export interface UserProfileInterface {
  name: string;
  photo: string;
  age: number;
  address: string;
}

export interface GenericContainerProps<T> {
  children: T;
}

export interface GeolocationInterface {
  latitude: number | null;
  longtitude: number | null;
}

export interface SvgProperty {
  width: number,
  height: number
}

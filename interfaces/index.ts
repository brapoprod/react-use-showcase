// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
    id: number;
    name: string;
};

export type Viking = {
    name: string;
    translation: string;
    gender: Gender | 'uni';
};

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

export type VikingReturnType = Viking & {
    score: number;
};

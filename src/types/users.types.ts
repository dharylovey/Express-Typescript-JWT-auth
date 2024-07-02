export interface UserProps {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: 'male' | 'female';
    image: string;
}
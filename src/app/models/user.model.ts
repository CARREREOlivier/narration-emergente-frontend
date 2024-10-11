export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: string;
  banStatus: string;
  date_of_birth: string;
  theme_preference: string;
  description: string;
  slug: string;
  validated_by_admin: string;

  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    created_at: string,
    banStatus: string,
    date_of_birth: string,
    theme_preference: string,
    description: string,
    slug: string,
    validated_by_admin: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.created_at = created_at;
    this.banStatus = banStatus;
    this.date_of_birth = date_of_birth;
    this.theme_preference = theme_preference;
    this.description = description;
    this.slug = slug;
    this.validated_by_admin = validated_by_admin;
  }
}

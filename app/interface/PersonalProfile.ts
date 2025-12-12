import { Link } from "./Link";
import { Post } from "./Post";

export interface PersonalProfile {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  contactNumber: string;
  posts: Post[];
  email: string;
  links: Link[];
}

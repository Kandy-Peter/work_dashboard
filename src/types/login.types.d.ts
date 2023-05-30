export type LoginResponse = {
  status: {
    code: number;
    message: string;
  };
  data: {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    salary: number;
    bio: string | null;
    role: string;
    country: string;
    city: string;
    phone_number: string;
    zip: string;
    departments: string[];
    organization_id: string | null;
    created_at: string;
    updated_at: string;
    avatar: string;
    current_sign_in_at: string | null;
    last_sign_in_at: string | null;
    current_sign_in_ip: string | null;
    last_sign_in_ip: string | null;
    sign_in_count: number;
  };
  token: string;
};

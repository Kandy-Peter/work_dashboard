import { type } from "os";

export {};

declare global {
	/**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
	interface RoutesType {
		name: string;
		layout: string;
		component:  JSX.Element;
		icon: JSX.Element | string;
		path: string;
		secondary?: boolean;
	}

	type LoginResponse = {
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
			position: string;
		};
		token: string;
	};

	interface BannerProps {
		firstName?: string;
		avatar?: string;
		banner?: string;
		lastName?: string;
		position?: string;
		department?: string;
		bio?: string;
		phoneNumber?: string;
		email?: string;
		address?: string;
		city?: string;
		country?: string;
		role?: string;
		salary?: string;
		usernames?: string;
		zipCode?: string;
		education?: string,
		university?: string,
		field_of_study? :string,
		birthday?: date,
		nationality?: string,
		national_id?: string,
		age?: number,
		marital_status?: string,
		country	?: string,
		city?: string,
		gender?: string,
		phone_number?: string,
		address?: string,
		zip?: string,
		personal_email?: string,
		postion?: string,
		department?: string,
		department2?: string,
		organization?: string,
		employment_date?: date,
		employment_status?: string,
		role?: string,
		avatar?: string,
		employee_id?: string,
		branch?: string,
		showModal?: boolean;
		handleClose?: () => void;
		handleOpen?: () => void;
	}
}

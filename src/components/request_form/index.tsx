import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";

const RequestForm = () => {
  return (
    <>
      <InputField
        variant="demo"
        placeholder="Full name"
        id="name"
        type="text"
        value=""
        error=""
        onChange={() => {}}
      />
      {/* Email */}
      <InputField
        variant="demo"
        placeholder="Email address"
        id="email"
        type="email"
        value=""
        error=""
        onChange={() => {}}
      />
      <div className="flex-wrap items-center justify-between lg:flex lg:gap-3">
        {/* Organization name */}
        <InputField
          variant="demo"
          placeholder="Organization name"
          id="organization"
          type="text"
          value=""
          error=""
          onChange={() => {}}
        />
        {/* Website */}
        <InputField
          variant="demo"
          placeholder="Website"
          id="website"
          type="text"
          value=""
          error=""
          onChange={() => {}}
        />
      </div>
      {/* Phone */}
      <InputField
        variant="demo"
        placeholder="Phone number"
        id="phone"
        type="text"
        value=""
        error=""
        onChange={() => {}}
      />
      {/* How did you hear about us? */}
      <InputField
        variant="demo"
        extra="mb-3"
        placeholder="How did you hear about us?"
        id="hear"
        type="text"
        value=""
        error=""
        onChange={() => {}}
      />
      {/* Terms and conditions */}
      <div className="flex items-center justify-start my-4">
        <Checkbox
          id="terms"
          label="I agree with the terms and conditions"
          checked={false}
          onChange={() => {}}
        />
        <p className="text-xs text-gray-700 ml-2">
          By submitting this form, you agree to our{" "}
          <a
            href="/"
            className="text-sky-700 hover:text-sky-800"
          > 
            Privacy Policy and Terms of Service
          </a>
          .
        </p>
      </div>

      {/* Button */}
      <div className="flex w-full flex-col items-center justify-center">
        <button className="h-12 w-full rounded-md bg-orange-600 text-base font-bold text-white hover:bg-orange-800">
          Submit Request
        </button>
      </div>
      <div className="flex w-full items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-2 mt-1 h-4 w-4 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
        <p className="mt-2 text-xs text-gray-700">
          We garanty 100% privacy. Your information will not be shared.
        </p>
      </div>
    </>
  );
};

export default RequestForm;

import { useState } from "react";

export default function PasswordInput({ label, required }) {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  return (
    <div className="w-full">
      <div className="flex flex-row">
        <label className="text-gray-600" htmlFor="pass">
          {label}
        </label>
        {required && (
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.192 1.78L6.768 2.82L4.544 3.748L6.784 4.66L6.176 5.732L4.24 4.324L4.496 6.74H3.296L3.536 4.324L1.6 5.748L0.976 4.66L3.2 3.732L0.976 2.836L1.568 1.764L3.552 3.188L3.296 0.756H4.512L4.24 3.188L6.192 1.78Z"
              fill="#D32E1F"
            />
          </svg>
        )}
      </div>
      <div className="relative mt-2">
        <button
          className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
          onClick={() => setPasswordHidden(!isPasswordHidden)}
        >
          {isPasswordHidden ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </button>
        <input
          type={isPasswordHidden ? "password" : "text"}
          id="pass"
          placeholder=""
          className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
    </div>
  );
}

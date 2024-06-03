export default function Label({ label, showRequired }) {
  return (
    <div className="flex flex-row">
      <label className="font-medium">{label}</label>
      {showRequired && (
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
  );
}

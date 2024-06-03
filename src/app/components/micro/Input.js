import Label from "./Label";

export default function Input({ label, type, required, width }) {
  return (
    <div>
      <div className="mb-0">
        <Label label={label} showRequired={required} />
      </div>
      <input
        type={type}
        className={`w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg`}
      />
    </div>
  );
}

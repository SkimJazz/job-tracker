/**
 * FormRow is a reusable form input component.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.type - The type of the input (e.g., "text", "email", "password").
 * @param {string} props.name - The name and id for the input element.
 * @param {string} [props.labelText] - Optional label text to display; falls back to `name` if not provided.
 * @param {string} [props.defaultValue=""] - The default value for the input field.
 * @returns {JSX.Element} A form row containing a label and input.
 */
const FormRow = ({ type, name, labelText, defaultValue = "" }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      {/*TODO:
       * Refactor this input to be a controlled component
       * in preparation for backend integration.
       */}
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default FormRow;

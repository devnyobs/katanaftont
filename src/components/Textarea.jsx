function Textarea({ title, Value, onValidate }) {
  return (
    <div className="inputbox">
      <textarea
        name="plaintext"
        value={Value}
        onChange={(e) => onValidate(e.target.value)}
        required="required"
        multiple={true}
        rows={4}
      />
      <span> {title} </span>
    </div>
  );
}

export default Textarea;

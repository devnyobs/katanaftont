function Textfield({ typetext, title, Valid, onValidate }) {
  return (
    <div className="inputbox">
      <input
        type={typetext}
        required="required"
        value={Valid}
        onChange={(e) => {onValidate(e.target.value)}}
      />
      <span> {title} </span>
    </div>
  );
}

export default Textfield;

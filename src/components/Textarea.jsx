function Textarea({title, name}) {
  return (
    <div className="inputbox">
      <textarea name={name} required="required" multiple={true} />
      <span> {title} </span>
    </div>
  );
}

export default Textarea;



export default function Filter ({
  onChange
}){
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text"
        onChange={onChange}
        placeholder="text name"
      />
    </div>
  );
}

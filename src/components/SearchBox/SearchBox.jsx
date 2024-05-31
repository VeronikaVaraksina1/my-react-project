import { useId } from 'react';

export default function SearchBox({ valueInput, onSetInputText }) {
  const searchId = useId();

  return (
    <>
    <h2>Control element</h2>
      <label htmlFor={searchId}>Search articles</label>
      <input type="text" name="query" id={searchId} value={valueInput} onChange={(e) => onSetInputText(e.target.value)} />
    </>
  );
}

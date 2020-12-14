/* eslint-disable no-use-before-define */
import React ,{useState} from 'react';
//import PrimarySelectBox from '../ui/PrimarySelectBox'
import SearchResultContainer from './SearchResultContainer'

export default function AriaSelectBox() {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
        />
        <button type="submit">검색</button>
      </form>
      <SearchResultContainer searchPlace={place} />
    </>
  );
}
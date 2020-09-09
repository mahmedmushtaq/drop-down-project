import React, { useState } from 'react';
import './drop-down.css';
import DropDownItem from './drop-down-item';

export default (props) => {
  // it is used to show or hide the dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // selectedOptions depend upon the number of options are selected
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  // props

  const { options, linkedOptions } = props;

  const onChange = (e, optionId) => {
    if (e.target.checked) {
      const newArray = linkedOptions.filter(
        (option) => option.linkedId === optionId
      );

      setSelectedOptions((prev) => [...prev, ...newArray]);
    } else {
      const remainingItems = selectedOptions.filter(
        (option) => option.linkedId !== optionId
      );

      setSelectedOptions([...remainingItems]);
    }
  };

  return (
    <div class="drop_down--container_div">
      <div class="drop_down--options_div">
        {/*  drop down button  */}

        <button class="drop_down--options_btn " onClick={toggle}>
          <h3>Select options</h3>
        </button>

        {/*  main options */}

        <div className="drop_down--options_item_container_div">
          <div className="drop_down--options_item_div">
            {dropdownOpen &&
              options.map((option) => (
                <DropDownItem
                  key={option.id + '' + option.id}
                  option={option}
                  onChange={onChange}
                  onSelect={true}
                />
              ))}
          </div>

          {/* linked options */}

          <div className="drop_down--options_item_div">
            {dropdownOpen &&
              selectedOptions.map((option) => (
                <DropDownItem
                  key={option.id + '' + option.id}
                  option={option}
                  onChange={onChange}
                  onSelect={false}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

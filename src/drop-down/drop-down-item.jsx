import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default (props) => {
  const { onChange, option, onSelect } = props;
  return (
    <div
      style={{
        wordBreak: 'break-all',
        width: '100%',
        textAlign: 'center',
        borderRight: '1px solid #bdc3c7',
        borderLeft: '1px solid #bdc3c7',
        borderBottom: '1px solid #bdc3c7',
      }}
    >
      <FormGroup check inline>
        <Label check>
          <Input
            type="checkbox"
            style={{
              marginRight: 6,
              marginLeft: 5,
              marginTop: 13,
              marginBottom: 13,
              visibility: onSelect ? 'visible' : 'hidden',
            }}
            onChange={(e) => onChange(e, option.id)}
          />
          <span>{option.text}</span>
        </Label>
      </FormGroup>
    </div>
  );
};

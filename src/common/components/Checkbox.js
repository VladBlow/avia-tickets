import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'components';

const Label = styled.label`
  display: flex;
  cursor: pointer;
  user-select: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Text = styled.span`
  display: block;
  width: calc(100% - 29px);
  font-size: 13px;
  line-height: 19px;
  padding-left: 10px;
`;

const getIconName = checked => `checkbox-${checked ? 'check' : 'uncheck'}`;

export class Checkbox extends Component {
  state = {
    checked: this.props.checked || false,
  };

  handleOnChange = ({ target: { checked } }) => this.setState({ checked });

  render() {
    const { checked } = this.state;
    const { children, className, ...props } = this.props;

    return (
      <Label className={className}>
        <input
          type="checkbox"
          checked={checked}
          hidden
          onChange={this.handleOnChange}
          {...props}
        />
        <Icon name={getIconName(checked)} size="19" />
        <Text>{children}</Text>
      </Label>
    );
  }
}

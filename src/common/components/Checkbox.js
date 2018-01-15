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

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6;
    cursor: not-allowed;
  `};
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

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.checked });
  }

  handleOnChange = ({ target: { checked } }) => this.setState({ checked });

  render() {
    const { checked } = this.state;
    const { children, className, disabled, ...props } = this.props;

    return (
      <Label className={className} disabled={disabled}>
        <input
          type="checkbox"
          checked={checked}
          hidden
          onChange={this.handleOnChange}
          disabled={disabled}
          {...props}
        />
        <Icon name={getIconName(checked)} size="19" />
        <Text>{children}</Text>
      </Label>
    );
  }
}

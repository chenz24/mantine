/* eslint-disable react/button-has-type */
// ^ this is fun – https://github.com/yannickcr/eslint-plugin-react/issues/1555

import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineSize, MantineNumberSize } from '../../theme';
import { ComponentPassThrough } from '../../types';
import useStyles, { heights } from './Button.styles';

export const BUTTON_SIZES = heights;

export interface ButtonBaseProps extends DefaultProps {
  /** Predefined button size */
  size?: MantineSize;

  /** Button type attribute */
  type?: 'submit' | 'button' | 'reset';

  /** Button color from theme */
  color?: string;

  /** Adds icon before button label  */
  leftIcon?: React.ReactNode;

  /** Adds icon after button label  */
  rightIcon?: React.ReactNode;

  /** Sets button width to 100% of parent element */
  fullWidth?: boolean;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Controls button appearance */
  variant?: 'link' | 'filled' | 'outline' | 'light';

  /** Set text-transform to uppercase */
  uppercase?: boolean;
}

export function Button<
  T extends React.ElementType = 'button',
  U extends HTMLElement = HTMLButtonElement
>({
  className,
  size = 'md',
  color,
  type = 'button',
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  fullWidth = false,
  variant = 'filled',
  radius = 'sm',
  component: Element = 'button',
  elementRef,
  themeOverride,
  uppercase = false,
  ...others
}: ComponentPassThrough<T, ButtonBaseProps> & {
  /** Get root element ref */
  elementRef?: React.ForwardedRef<U>;
}) {
  const classes = useStyles({
    radius,
    color,
    size,
    fullWidth,
    theme: useMantineTheme(themeOverride),
  });

  return (
    <Element
      {...others}
      className={cx(classes.shared, classes[variant], className)}
      type={type}
      disabled={disabled}
      ref={elementRef}
      onTouchStart={() => {}}
    >
      <div className={classes.inner}>
        {leftIcon && (
          <span data-mantine-left-icon className={cx(classes.icon, classes.leftIcon)}>
            {leftIcon}
          </span>
        )}

        <span
          className={classes.label}
          data-mantine-label
          style={{ textTransform: uppercase ? 'uppercase' : undefined }}
        >
          {children}
        </span>

        {rightIcon && (
          <span data-mantine-right-icon className={cx(classes.icon, classes.rightIcon)}>
            {rightIcon}
          </span>
        )}
      </div>
    </Element>
  );
}

Button.displayName = '@mantine/core/Button';

export type ButtonProps = React.ComponentProps<typeof Button>;

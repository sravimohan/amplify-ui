import { Icon } from '@aws-amplify/ui-react';

export const DataIcon = ({ ariaLabel = '', ...rest }) => {
  return (
    <Icon
      ariaLabel={ariaLabel}
      {...rest}
      viewBox={{
        width: 54,
        height: 54,
      }}
    >
      <path
        d="M39,5.57142857 L39,22.2857143 L13,22.2857143 L13,5.57142857 L39,5.57142857 Z M37.1428571,7.42857143 L14.8571429,7.42857143 L14.8571429,20.4285714 L37.1428571,20.4285714 L37.1428571,7.42857143 Z"
        id="Rectangle"
      />
      <path
        d="M32.5,31.5714286 L32.5,44.5714286 L19.5,44.5714286 L19.5,31.5714286 L32.5,31.5714286 Z M30.6428571,33.4285714 L21.3571429,33.4285714 L21.3571429,42.7142857 L30.6428571,42.7142857 L30.6428571,33.4285714 Z"
        id="Rectangle-Copy-7"
      />
      <path
        d="M48.2857143,31.5714286 L48.2857143,44.5714286 L35.2857143,44.5714286 L35.2857143,31.5714286 L48.2857143,31.5714286 Z M46.4285714,33.4285714 L37.1428571,33.4285714 L37.1428571,42.7142857 L46.4285714,42.7142857 L46.4285714,33.4285714 Z"
        id="Rectangle-Copy-8"
      />
      <path
        d="M16.7142857,31.5714286 L16.7142857,44.5714286 L3.71428571,44.5714286 L3.71428571,31.5714286 L16.7142857,31.5714286 Z M14.8571429,33.4285714 L5.57142857,33.4285714 L5.57142857,42.7142857 L14.8571429,42.7142857 L14.8571429,33.4285714 Z"
        id="Rectangle-Copy-19"
      />
      <polygon
        id="Line-7"
        points="26.9285714 21.3571429 26.9285714 32.5 25.0714286 32.5 25.0714286 21.3571429"
      />
      <polygon
        id="Line-7-Copy"
        points="42.7142857 26.9285714 42.7142857 32.5 40.8571429 32.5 40.8571429 26.9285714"
      />
      <polygon
        id="Line-7-Copy-2"
        points="11.1428571 26.9285714 11.1428571 32.5 9.28571429 32.5 9.28571429 26.9285714"
      />
      <polygon
        id="Line-7"
        transform="translate(26.000000, 26.928571) rotate(-90.000000) translate(-26.000000, -26.928571) "
        points="26.9285714 10.2142857 26.9285714 43.6428571 25.0714286 43.6428571 25.0714286 10.2142857"
      />
    </Icon>
  );
};

import React from 'react';

const Transactions = ({ width, height, fill, className }) => (
  <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <path
      d='M11.7924 17.6712V16.536C11.15 16.4832 10.5428 16.338 9.97079 16.1004C9.40759 15.854 8.91039 15.5284 8.47919 15.1236L9.41639 13.8432C10.1116 14.5032 10.9036 14.9036 11.7924 15.0444V12.9192L11.0796 12.774C10.2172 12.6156 9.60119 12.3516 9.23159 11.982C8.86199 11.6124 8.67719 11.0844 8.67719 10.398C8.67719 9.87001 8.80039 9.41241 9.04679 9.02521C9.30199 8.63801 9.66279 8.33441 10.1292 8.11441C10.6044 7.89441 11.1588 7.77561 11.7924 7.75801V6.66241H12.6768V7.79761C13.2136 7.85041 13.746 7.96481 14.274 8.14081C14.802 8.31681 15.2904 8.55001 15.7392 8.84041L14.9736 10.2264C14.56 9.98001 14.164 9.78201 13.7856 9.63241C13.4072 9.48281 13.0376 9.37721 12.6768 9.31561V11.4144L13.3764 11.5332C14.3004 11.7092 14.9648 11.982 15.3696 12.3516C15.7832 12.7124 15.99 13.2184 15.99 13.8696C15.99 14.3888 15.8536 14.8464 15.5808 15.2424C15.3168 15.6296 14.9384 15.9376 14.4456 16.1664C13.9528 16.3952 13.3632 16.5272 12.6768 16.5624V17.6712H11.7924ZM11.7924 11.3088V9.24961C11.3612 9.26721 11.0092 9.36401 10.7364 9.54001C10.4724 9.71601 10.3404 9.95361 10.3404 10.2528C10.3404 10.464 10.38 10.64 10.4592 10.7808C10.5472 10.9128 10.6836 11.0184 10.8684 11.0976C11.0532 11.1768 11.304 11.2428 11.6208 11.2956L11.7924 11.3088ZM12.6768 15.1104C13.152 15.0752 13.5304 14.9652 13.812 14.7804C14.1024 14.5868 14.2476 14.336 14.2476 14.028C14.2476 13.8256 14.208 13.6628 14.1288 13.5396C14.0584 13.4164 13.922 13.3152 13.7196 13.236C13.5172 13.1568 13.2312 13.0908 12.8616 13.038L12.6768 12.9984V15.1104Z'
      fill={fill}
    />
    <path d='M16.8 13.2H19.2L19.2 4.80001L21.6 4.80001L18 1.20001L14.4 4.80001L16.8 4.80001L16.8 13.2Z' fill={fill} />
    <path d='M7.20002 10.8H4.80002V19.2H2.40002L6.00002 22.8L9.60002 19.2H7.20002V10.8Z' fill={fill} />
  </svg>
);

export default Transactions;
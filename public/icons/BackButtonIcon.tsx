import { FC } from 'react';

interface BackButtonIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Компонент иконки кнопки "Назад"
 * @param {BackButtonIconProps} props - Свойства компонента
 * @returns {JSX.Element} SVG иконка
 */
const BackButtonIcon: FC<BackButtonIconProps> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect
      x="1"
      y="1"
      width="62"
      height="62"
      rx="31"
      stroke="currentColor"
      strokeWidth="2"
    />
    <g clipPath="url(#clip0_17_241)">
      <path
        d="M45.3334 30.3334H25.0501L34.3668 21.0167L32.0001 18.6667L18.6667 32.0001L32.0001 45.3334L34.3501 42.9834L25.0501 33.6668H45.3334V30.3334Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_17_241">
        <rect
          width="40"
          height="40"
          fill="white"
          transform="translate(12 12)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default BackButtonIcon;

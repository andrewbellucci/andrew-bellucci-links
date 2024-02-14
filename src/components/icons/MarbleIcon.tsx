interface Props {
  width?: number;
  height?: number;
}
export default function MarbleIcon({
  width = 30,
  height = 30
}: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="13" r="12.5" fill="url(#paint0_radial_81_1611)" className="dark:fill-[url(#lightness)] fill-[url(#darkness)]"/>
      <defs>
        <radialGradient id="lightness" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(9 9) rotate(46.1233) scale(18.0347)"
                        className="stop-color-dark-blue dark:stop-color-white">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="darkness" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(9 9) rotate(46.1233) scale(18.0347)"
                        className="stop-color-dark-blue dark:stop-color-white">
          <stop stopColor="#16191E"/>
          <stop offset="1" stopColor="#16191E" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  )
}

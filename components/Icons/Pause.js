export default function Pause (props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}
    >
      <g fill="none" stroke="#fff" strokeWidth={2}>
        <g transform="translate(6 5)">
          <rect width={8} height={21} rx={2} stroke="none" />
          <rect x={1} y={1} width={6} height={19} rx={1} />
        </g>
        <g transform="translate(16 5)">
          <rect width={8} height={21} rx={2} stroke="none" />
          <rect x={1} y={1} width={6} height={19} rx={1} />
        </g>
      </g>
    </svg>
  )
}

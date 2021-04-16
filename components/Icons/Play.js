export default function Play (props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}
    >
      <g fill="none">
        <path d="M24.286 13.8a2 2 0 010 3.392L10.06 26.088a2 2 0 01-3.06-1.7V6.608a2 2 0 013.06-1.7z" />
        <path
          d="M23.226 15.5L9 6.608v17.784L23.226 15.5m2 0c0 .652-.313 1.304-.94 1.696L10.06 26.087C8.728 26.92 7 25.962 7 24.392V6.608c0-1.57 1.728-2.528 3.06-1.695l14.226 8.891c.627.392.94 1.044.94 1.696z"
          fill="#fff"
        />
      </g>
    </svg>
  )
}

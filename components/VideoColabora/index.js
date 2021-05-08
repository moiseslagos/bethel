import styles from 'styles/components/videoColabora/VideoColabora.module.css'

export default function VideoColabora () {
  return (
    <div className={styles.wrapperVideo}>
      <div className="main-desk">
        <div className="wrapper-content">
          <h3 className="text-center">Video Lorem ipsum</h3>
          <div className={styles.videoWrapper}>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/6Nx6SzzBQg0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
        </div>
    </div>
  )
}

import styles from "../css/Video.module.css";

const Video = ({ video }) => {
  let str = video;
  let embedLink = str.replace("watch?v=", "embed/");

  let linkVideo = `${embedLink}`;

  return (
    <div>
      <iframe
        className={styles.iframe}
        src={linkVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;

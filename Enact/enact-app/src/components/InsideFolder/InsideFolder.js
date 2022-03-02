import kind from "@enact/core/kind";
import VideoPlayer,{Video} from "@enact/sandstone/VideoPlayer";

const InsideFolder = kind({
  name: "insidefolder",

  render: (props) => (
    <div>
      <VideoPlayer poster="https://assets.codepen.io/32795/poster.png">
        <Video mediaComponent="custom-video-element">
          <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" />
        </Video>
      </VideoPlayer>
    </div>
  ),
});

export default InsideFolder;

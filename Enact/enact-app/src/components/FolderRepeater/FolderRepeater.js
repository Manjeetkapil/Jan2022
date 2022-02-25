import kind from '@enact/core/kind';
import Repeater from "@enact/ui/Repeater";
import Folder from "../Folder/Folder";

const folders = [
	"Startek",
	"Music",
	"Video",
	"Audio",
	"Records",
	"Logs",
	"Wav",
	"New",
	"Default",
	"12345",
	"Android",
	"Data",
	"Obb",
	"Week1",
	"August",
	"Week2",
	"[FHD,UHD]Default",
	"Week3",
	"March",
	"[Subtitle]",
	"ScreenShots",
  ];
const FolderRepeater = kind({
	name: 'FolderRepeater',


	render: ({onNavigate,...rest}) => {	
		console.log(onNavigate)
		return (
			<Repeater childComponent={Folder} indexProp="index" itemProps={{onNavigate}}>
          {folders}
        </Repeater>
		);
	}
});

export default FolderRepeater;
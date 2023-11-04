import { ResponsiveButton } from "components/General/FormComponents";
import style from "./ClipboardButton.module.scss";
import Icon from "components/General/Icon";

interface ClipboardButtonProps {
	copyToClipboard: (text: string) => void;
	copied: boolean;
	text: string;
	label?: boolean;
}

const ClipboardButton: React.FC<ClipboardButtonProps> = ({
	copyToClipboard,
	copied,
	text,
	label = "",
}) => {
	return (
		<ResponsiveButton
			disabled={text === ""}
			className={style.button}
			onClick={() => copyToClipboard(text)}
			icon={copied ? <Icon name="Check" /> : <Icon name="Copy" />}
			aria-label={`select ${label} `}
		>
			{label}
		</ResponsiveButton>
	);
};

export default ClipboardButton;

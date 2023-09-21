import { TabsProps } from "antd";

const SITE_OPTIONS = {
	"frontend-focus": {
		label: "Frontend Focus",
		value: "frontend-focus",
		isFeedItem: true,
	},
	"status-code": {
		label: "Status Code",
		value: "status-code",
		isFeedItem: true,
	},
	news: {
		label: "News",
		value: "https://raw.githubusercontent.com/lifeparticle/binarytree/main/api/news.json",
		isFeedItem: false,
	},
};

const TAB_ITEMS: TabsProps["items"] = [
	{
		key: SITE_OPTIONS["frontend-focus"].value,
		label: SITE_OPTIONS["frontend-focus"].label,
		show: true,
	},
	{
		key: SITE_OPTIONS["status-code"].value,
		label: SITE_OPTIONS["status-code"].label,
		show: true,
	},
	{
		key: SITE_OPTIONS["news"].value,
		label: SITE_OPTIONS["news"].label,
		show: true,
	},
].filter((item) => item.show);
const ROOT_URL = import.meta.env.DEV
	? "http://localhost:5000/rss?name="
	: "https://binarytree-rssfeed-api.vercel.app/rss?name=";

const QUERY_KEY_NEWS = "news";

export { SITE_OPTIONS, TAB_ITEMS, ROOT_URL, QUERY_KEY_NEWS };
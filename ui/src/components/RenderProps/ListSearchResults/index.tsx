import style from "./ListSearchResults.module.scss";
import Search from "components/General/Search";
import { getCategories } from "components/General/Search/helper";
import List, { ListProps } from "components/RenderProps/List";
import { API_ERROR, API_NO_DATA } from "data/constants";
import Text from "components/General/Text/Text";
import { filteredNews, filteredResource } from "./helper";
import { ReactElement } from "react";
import { QUERY_KEY_NEWS } from "pages/Newsfeed/utils/constants";
import useParamsValue from "hooks/useParamsValue";
import { ResourceType } from "components/General/ListItems/Resource/Resource";

interface ListSearchResultsProps<T> extends ListProps<T> {
	resourceName: string;
	isError: boolean;
}

const ListSearchResults = <T,>({
	items,
	resourceName,
	itemComponent,
	isLoading,
	isError,
}: ListSearchResultsProps<T>): ReactElement => {
	const { searchParams, updateParamsValue } = useParamsValue({});

	if (isError) {
		return <Text text={API_ERROR} />;
	}

	if (!isError && !isLoading && items?.length === 0) {
		return <Text text={API_NO_DATA} />;
	}

	const { q: searchQuery, cat: categoryQuery } = {
		q: searchParams.get("q") ?? "",
		cat: searchParams.get("cat") ?? "",
	};

	const filteredList =
		resourceName === QUERY_KEY_NEWS
			? filteredNews(searchQuery, items)
			: filteredResource(searchQuery, categoryQuery, items);

	const list = filteredList || [...Array(20).keys()];

	const categories = getCategories(items as ResourceType[], resourceName);

	const onSearchCriteriaChange = (queryType: "q" | "cat", value: string) => {
		updateParamsValue(queryType, value);
	};

	return (
		<div className={style.container}>
			<Search
				categories={categories}
				resourceName={resourceName}
				isLoading={isLoading}
				searchQuery={searchQuery}
				categoryQuery={categoryQuery}
				onSearchCriteriaChange={onSearchCriteriaChange}
			/>
			<List
				items={list}
				itemComponent={itemComponent}
				isLoading={isLoading}
			/>
		</div>
	);
};

export default ListSearchResults;

import emojiList from "./emojiList.json";

export default function filterEmoji(searchText: string, maxResults: number) {
    return emojiList
        .filter(emoji => {
            if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            return !!emoji.keywords.includes(searchText);
        })
        .slice(0, maxResults);
}

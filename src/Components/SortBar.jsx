import SortButton from "./SortButton";

export default function SortBar({ setArticlesData }) {
  return (
    <section className="sort-bar">
      <SortButton setArticlesData={setArticlesData}>Sort By</SortButton>
    </section>
  );
}

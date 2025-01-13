import clsx from "clsx";
import css from "./List.module.css";
const List = ({ data, title, variant = false }) => {
  console.log("css:", css);

  // const titleStyles = {
  //   color: "red",
  //   fontSize: "80",
  //   lineHeight: "1.5",
  // };
  // const listStyles = {
  //   color: "blue",
  //   fontSize: "40",
  //   lineHeight: "1.5",
  // };
  return (
    <div
      className={clsx(css.listWrapper, { [css[variant]]: variant !== false })}
    >
      <h2 className={css.listTitle}>{title}</h2>
      <ul className={css.list}>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;

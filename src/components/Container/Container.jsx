import css from "./Container.module.css";
const Container = ({ children, title = false }) => {
  return (
    <section className={css.container}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Container;

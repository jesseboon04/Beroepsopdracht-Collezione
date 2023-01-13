import "./AbonementenSection.css";

const AbonementenSection = (props) => {
  return (
    <>
      <header class="section__header">
        <h2 class="section__h2">{props.titleSection || "placeholder title"}</h2>
      </header>
      <section class="section">{props.children}</section>
    </>
  );
};

export default AbonementenSection;

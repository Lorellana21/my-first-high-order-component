import "./styles.css";


/*componente simple que retorna un parrafo*/
const someText = () => <p>Hi</p>;

/*HOC que acepta un componente 
y luego retorna un span con cierto estilo*/
//Normalmente siempre comienzan con with
const withRedColor = (Component) => () => {
  return (
    <span
      style={{
        color: "red"
      }}
    >
      <Component />
    </span>
  );
};

export default withRedColor(someText);

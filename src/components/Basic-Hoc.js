
//pasamos un componente a nuestro HOC y luego lo devolvemos
const withComponent = Component => () => <Component />

const someComponent = () => (
    <div>
        Hi
    </div>
)

const sameComponent = withComponent(someComponent)


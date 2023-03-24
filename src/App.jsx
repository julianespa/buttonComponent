import { Button } from "./Button"
import "../public/styles.css"


function App() {
  
  return (
    <>
      <h1>Buttons</h1>
      <main>
        <section>
          <p> {"<Button/>"} </p>
          <Button>Default</Button>
        </section>
        <section>
          <p> {"< Button variant="+"outline"+" />"} </p>
          <Button variant="outline"> Outline </Button>
        </section>
        <section>
          <p> {"< Button variant="+"text"+" />"} </p>
          <Button variant="text"> Default </Button>
        </section>
        <section>
          <p> {"< Button disableShadow />"} </p>
          <Button disableShadow color="primary"> Default </Button>
        </section>
        <section>
          <p> {"< Button disabled />"} </p>
          <Button disabled > Disabled </Button>
        </section>
        <section>
          <p> {"< Button variant="+"text"+" disabled />"} </p>
          <Button variant="text" disabled> Disabled </Button>
        </section>
        <section>
          <p> {"< Button startIcon="+"add_shopping_cart"+" />"} </p>
          <Button startIcon="add_shopping_cart" color="primary"> Default </Button>
        </section>
        <section>
          <p> {"< Button endIcon="+"add_shopping_cart"+" />"} </p>
          <Button endIcon="add_shopping_cart" color="primary"> Default </Button>
        </section>
        <section id="size">
          <div>
            <p> {"< Button size="+"sm"+" />"} </p>
            <Button color="primary" size="sm"> Default </Button>
          </div>

          <div>
            <p> {"< Button size="+"md"+" />"} </p>
            <Button color="primary" size="md"> Default </Button>
          </div>
        
          <div>
            <p> {"< Button size="+"lg"+" />"} </p>
            <Button color="primary" size="lg"> Default </Button>
          </div>
        </section>
        <section id="color">
          <div>
            <p> {"< Button color="+"default"+" />"} </p>
            <Button color="default" > Default </Button>
          </div>

          <div>
            <p> {"< Button color="+"primary"+" />"} </p>
            <Button color="primary" > Primary </Button>
          </div>
        
          <div>
            <p> {"< Button color="+"secondary"+" />"} </p>
            <Button color="secondary" > Secondary </Button>
          </div>

          <div>
            <p> {"< Button color="+"danger"+" />"} </p>
            <Button color="danger" > Danger </Button>
          </div>
        </section>
      </main>
      <section><p style={{textAlign: "center"}}>Icons: <a style={{color: "inherit"}} target="_blank" href="https://material.io/resources/icons/?style=round">https://material.io/resources/icons/?style=round</a></p></section>
      <footer> Julian Espasandin 2023</footer>
    </>
  )
}

export default App

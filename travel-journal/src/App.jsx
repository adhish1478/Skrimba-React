import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"

const dataMod= data.map((place) => {
    return (
        <Entry key={place.id}
          {...place} // Spread operator to pass all props
        />
    )})

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                {dataMod}
            </main>
        </>
    )
}
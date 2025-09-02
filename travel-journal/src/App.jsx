import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"

const dataMod= data.map((place) => {
    return (
        <Entry key={place.id}
          img= {place.img}
          title= {place.title}
          country= {place.country}
          googleMapsLink= {place.googleMapsLink}
          dates= {place.dates}
          text= {place.text}
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
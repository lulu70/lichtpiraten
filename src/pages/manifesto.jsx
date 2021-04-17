import React from "react"
import Divider from "../components/reusables/Divider"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"
import SizeWrapper from "../components/reusables/SizeWrapper"

const Manifesto = () => {
  return (
    <>
      <SEO title="Manifesto" />
      <Layout>
        <section id="main">
          <SizeWrapper className="py-12">
            <h1 className="text-center text-xl font-light text-gray-400">
              MANIFESTO
            </h1>
            <Divider />
            <div className="space-y-8 mt-8 text-gray-400 font-light">
              <p>
                In einer Welt, in der alles jemandem gehört, kann man die Idee
                des Piraten reaktivieren. Sie taten, was sie tun mussten, um zu
                überleben und um zu leben.
              </p>
              <p>
                Der Mensch soll eine Maschine sein und effizient seinen
                ökonomischen Sinn erfüllen. Wer sich dieser Maxime, die uns
                Menschen seit Jahrhunderten umgarnt, widersetzt und sich
                angeekelt abwendet, bleibt frömmelnde Einsamkeit oder
                Freibeuterei. Seine Moral schafft sich der Pirat selbst.
              </p>
              <p>
                Licht ist das, was wir sehen und sehen bedeutet glauben. Die
                Augen sehen nicht was ist, sie bemerken, was nötig scheint, zum
                überleben. Allein die Idee der künstlichen Beleuchtung ist
                widernatürlich. Die Vorstellung das unser Gehirn damit ohne
                weiteres klarkommt, ist absurd. Das künstliche Licht das den Tag
                in der Nacht andeuteten soll, hat sich von seiner puren Funktion
                emanzipiert.
              </p>
              <p>
                Es hinterläßt auf unserer Sehrinde einen Eindruck, der nur
                scheint. Wir sind verändert wurden. Auf gut hundert Jahre
                elektrischem Strom haben uns hunderttausend Jahre Evolution nur
                mangelhaft vorbereitet. Glaubt ihr uns, dass nichts aussehen
                muß, wie es gerade scheint?
              </p>
              <p>
                Langsam begreifen wir, dass wir in einer künstlichen Welt leben,
                die aussieht, wie sie aussehen soll. Die Oberflächen der Dinge
                die unseren Alltag bestimmen, sind erdacht, designt und in
                unseren Alltag geschmuggelt. Das Ziel der Piraterie liegt in der
                Eroberung von etwas, was ihr nicht gehört. Die Lichtpiraten
                kapern das Anlitz von etwas, übernehmen darüber Kontrolle und
                zeichnen das auf.
              </p>
              <p>
                Da Schönheit irgendwo dazwischen liegen soll, stapeln wir
                übereinander. Schicht für Schicht verschmelzen die Ebenen der
                Wahrnehmung und hinterlassen ein Vibrieren in der Seele, dass
                daran erinnert, es ist leicht frei zu sein.
              </p>
            </div>
          </SizeWrapper>
        </section>
      </Layout>
    </>
  )
}

export default Manifesto

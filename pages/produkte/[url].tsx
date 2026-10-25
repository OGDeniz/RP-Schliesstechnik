import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps } from "next";
import styles from "../../styles/produktseite.module.css";
import jsonDb from "../../components/data/produkte";

const SITE = "https://schluesselrp.de";
const PHONE = "+49 176 236 875 42";
const PHONE_LINK = "tel:+4917623687542";

type Produkt = {
    produktId: number;
    name: string;
    kategorie: string;
    produktbeschreibung: string;
    preis: number;
    url: string;
    bild: string;
};

const Produktseite = ({ produkt }: { produkt: Produkt }) => {
    const isDienstleistung = produkt.kategorie === "Dienstleistung";
    const canonical = `${SITE}/produkte/${produkt.url}/`;
    const metaTitle = `${produkt.name} in Bruchsal & Umgebung – ab ${produkt.preis} € | RP Schliesstechnik`;
    const metaDescription = produkt.produktbeschreibung.slice(0, 155).trim() + "…";
    const imageAbs = produkt.bild.startsWith("http") ? produkt.bild : `${SITE}${produkt.bild}`;

    const serviceLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: produkt.name,
        serviceType: produkt.name,
        description: produkt.produktbeschreibung,
        url: canonical,
        image: imageAbs,
        provider: {
            "@type": "LocalBusiness",
            name: "RP Schliesstechnik",
            telephone: PHONE,
            address: {
                "@type": "PostalAddress",
                streetAddress: "Schwimmbadstraße 18",
                addressLocality: "Bruchsal",
                postalCode: "76646",
                addressCountry: "DE",
            },
        },
        areaServed: [
            { "@type": "City", name: "Bruchsal" },
            { "@type": "City", name: "Ettlingen" },
            { "@type": "City", name: "Waghäusel" },
            { "@type": "City", name: "Bretten" },
            { "@type": "City", name: "Stutensee" },
        ],
        offers: {
            "@type": "Offer",
            price: produkt.preis,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
        },
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE}/produkte/` },
            { "@type": "ListItem", position: 3, name: produkt.name, item: canonical },
        ],
    };

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={canonical} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:url" content={canonical} />
                <meta property="og:image" content={imageAbs} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:image" content={imageAbs} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
            </Head>

            <main className={styles.page}>
                <section className={styles.pageIntro}>
                    <span className={styles.eyebrow}>24h Notdienst & Sicherheitstechnik</span>
                    <h1 className={styles.pageTitle}>{produkt.name} in Bruchsal & Umgebung</h1>
                    <p className={styles.pageText}>
                        Professionelle Lösungen rund um Türöffnung, Schlosswechsel,
                        Sicherheitstechnik und Notdienst im Raum Bruchsal.
                    </p>

                    <div className={styles.badges}>
                        <span className={styles.badge}>24/7 erreichbar</span>
                        <span className={styles.badge}>Transparente Preise</span>
                        <span className={styles.badge}>Region Bruchsal</span>
                    </div>
                </section>

                <Link href="/produkte/" className={styles.backButton}>
                    ← Zurück zur Produktübersicht
                </Link>

                <section className={styles.serviceCard}>
                    <div className={styles.imageWrap}>
                        {produkt.bild && (
                            <Image
                                src={produkt.bild}
                                alt={`${produkt.name} – RP Schliesstechnik Bruchsal`}
                                width={800}
                                height={600}
                                className={styles.serviceImage}
                                priority
                            />
                        )}
                    </div>

                    <div className={styles.content}>
                        <div className={styles.contentTop}>
                            <span className={styles.categoryTag}>{produkt.kategorie}</span>
                            <h2 className={styles.serviceTitle}>{produkt.name}</h2>
                            <p className={styles.serviceText}>{produkt.produktbeschreibung}</p>
                        </div>

                        <ul className={styles.featureList}>
                            <li>Schnelle Hilfe im Einsatzgebiet rund um Bruchsal</li>
                            <li>Saubere und professionelle Ausführung</li>
                            <li>Persönliche Beratung & transparente Kommunikation</li>
                        </ul>

                        <div className={styles.footer}>
                            <div className={styles.priceBox}>
                                <span className={styles.priceLabel}>ab</span>
                                <span className={styles.price}>{produkt.preis} €</span>
                            </div>

                            {isDienstleistung ? (
                                <div className={styles.actions}>
                                    <a href={PHONE_LINK} className={styles.primaryButton}>
                                        Jetzt anrufen
                                    </a>
                                    <Link href="/contact/" className={styles.secondaryButton}>
                                        Anfrage senden
                                    </Link>
                                </div>
                            ) : (
                                <span className={styles.infoText}>{produkt.kategorie}</span>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: jsonDb.produkte.map((p) => ({ params: { url: p.url } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const url = params?.url as string;
    const produkt = jsonDb.produkte.find((p) => p.url === url) || null;

    if (!produkt) {
        return { notFound: true };
    }

    return { props: { produkt } };
};

export default Produktseite;

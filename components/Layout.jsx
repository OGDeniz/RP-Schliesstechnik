import PropTypes from 'prop-types';
import Navigation from "@/components/navigation/Navigation";
import Fusszeile from "@/components/navigation/Fusszeile";
import Head from "next/head";


export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>RP Schliesstechnik</title>
                <meta name="description" content="Liefermax" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            {children}
            <Fusszeile/>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
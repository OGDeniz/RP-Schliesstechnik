import PropTypes from 'prop-types';
import Navigation from "../components/navigation/Navigation";
import Fusszeile from "../components/navigation/Fusszeile";
import Head from "next/head";
import React from "react";
import ClaimBar from "../components/ClaimBar";
import StickyCallButton from "../components/ui/StickyCallButton";

import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Head>
                <title>RP Schließtechnik – Schlüsseldienst Bruchsal & Umgebung</title>
                <meta
                    name="description"
                    content="RP Schließtechnik – Ihr Schlüsseldienst für Türöffnung, Schlosswechsel, Einbruchschutz und Sicherheitstechnik in Bruchsal, Ettlingen, Waghäusel und Umgebung."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ClaimBar />
            <Navigation />
            {children}
            <Fusszeile />
            <StickyCallButton />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
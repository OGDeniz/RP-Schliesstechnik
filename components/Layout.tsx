import PropTypes from 'prop-types';
import Navigation from "../components/navigation/Navigation";
import Fusszeile from "../components/navigation/Fusszeile";
import Head from "next/head";
import React from "react";
import ClaimBar from "../components/ClaimBar";


import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Head>
                <title>RP Schliesstechnik</title>
                <meta name="description" content="Liefermax" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ClaimBar />
            <Navigation />
            {children}
            <Fusszeile />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
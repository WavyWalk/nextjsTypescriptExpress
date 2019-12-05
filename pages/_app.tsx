import App, { Container } from "next/app";
import React, {ComponentClass} from "react";
import "../css/index.scss";
import {DocumentContext} from "next/document";
import {NextPageContext} from "next";
import {AppContextType} from "next/dist/next-server/lib/utils";
import {SampleState, SubscriptionState} from "../lib/statemanagement/SubscriptionState";

export default class Main extends App {

    static async getInitialProps(args: AppContextType) {
        let pageProps = {};
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Component {...pageProps} />
        );
    }

}
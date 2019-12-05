import {useEffect, useRef, useState} from "react";
import {number} from "prop-types";

export class SampleState {

    isLoggedIn = 'true'

    setIsLoggedIn(value: any) {
        this.isLoggedIn = value
        SubscriptionState.updateState({state: this})
    }
}

export class SubscriptionState {

    static init(state: any) {
        this.state = state
    }

    static currentCounter = 0

    static state: any

    static subscribedComponents: {[id: number]: any} = {}

    static useLink(): SampleState {
        return (() => {
            const [state, updateState] = useState({state: this.state})
            useEffect(() => {
                let id = this.generateId()
                this.subscribe(id, updateState)
                return () => {
                    this.unsubscribe(id)
                }
            }, [])
            return state.state
        })()
    }

    static generateId() {
        return this.currentCounter += 1
    }

    static subscribe(id: number, updateFunction: any) {
        this.subscribedComponents[id] = updateFunction
    }

    static unsubscribe(id: number) {
        delete this.subscribedComponents[id]
    }

    static updateState(value: any) {
        for (let updateFunction of Object.values(this.subscribedComponents)) {
            updateFunction(value)
        }
    }
}


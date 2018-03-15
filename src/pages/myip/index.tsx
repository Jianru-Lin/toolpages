import * as React from 'react';
import './index.css';

interface MyIPP {

}

interface MyIPS {

}

export class MyIP extends React.Component<MyIPP, MyIPS> {
    constructor(props: MyIPP) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <h1>127.0.0.1</h1>
            </div>
        );
    }
}
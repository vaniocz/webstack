import * as React from 'react';

export interface HelloProps
{
    who: string;
    using: string;
}

export default class Hello extends React.Component<HelloProps, {}>
{
    public render(): JSX.Element
    {
        return <p>Hello {this.props.who} using {this.props.using}!</p>;
    }
}

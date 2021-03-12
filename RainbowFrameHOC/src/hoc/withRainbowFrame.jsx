import React from 'react';


export const withRainbowFrame = (colors) => (Fragment) => ({ children }) => {

    const reduceCB = (acc, cur) => {
        return (
            <div style={{ border: "solid 5px " + cur, padding: "5px" }}>
                {acc}
            </div>
        )
    }

    const rainbowFrame = colors.reduce(reduceCB, <Fragment>{children}</Fragment>);

    return (
        <div style={{ width: 400, textAlign: 'center', margin: 'auto' }}>
            {rainbowFrame}
        </div>
    );
};


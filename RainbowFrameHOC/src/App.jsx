import React from 'react';
import {withRainbowFrame} from './hoc/withRainbowFrame.jsx'


const Fragment = ({ children }) => {
    return <h1>{children}</h1>
}

class App extends React.Component {

    render() {
        let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
        
        let FramedFragment = withRainbowFrame(colors)(Fragment);

        return (
            <FramedFragment>
                Hello!
            </FramedFragment>
        );
    }
}

export default App;
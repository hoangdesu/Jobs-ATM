import React from 'react';
import Button from 'react-bootstrap/Button';

function App() {
    return (
        <div className="App">
            Hi
            <Button variant="primary">Button #1</Button>
            <Button variant="secondary" className="mx-2">
                Button #2
            </Button>
            <Button variant="success">Button #3</Button>
        </div>
    );
}

export default App;

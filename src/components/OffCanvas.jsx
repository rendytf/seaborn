import React, { Component } from 'react';
import { Offcanvas, OffcanvasBody } from 'reactstrap';

class OffCanvas extends Component {
    render() {
        return (
            <Offcanvas
                toggle={this.props.burgerToggle}
                isOpen={this.props.burgerIsOpen}
                direction='end'
            >
                <OffcanvasBody>
                    <div>Example OffCanvas</div>
                </OffcanvasBody>
            </Offcanvas>
        );
    }
}

export default OffCanvas;
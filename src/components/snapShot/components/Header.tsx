import React from "react";
import Form, {formProps} from "./Form";
import Navigation from "./Navigation";


const Header = (props: formProps) => {
    return (
        <div>
            <h1>SnapShot </h1>
            <Form
                history={props.history}
                handleSubmit={props.handleSubmit}
            />
            <Navigation/>
        </div>
    )
}

export default Header;

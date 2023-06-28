import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { Fragment, useEffect, useReducer, useState } from "react";

const Mui_Check1 : React.FC = () => {
    const [isShow, setIsShow] = useState("hide");

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setIsShow((event.target as HTMLInputElement).value);
    }

    const OpenTable = (ISS: string) => {
        (ISS === "open") ? console.log("isOpen") : console.log("isHide");
    }

    useEffect(() => {
        console.log("useEffect is === ", isShow);
        OpenTable(isShow);
    }, [isShow])

    

    return (
        <Fragment>
            <FormControl>
                <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={isShow}
                            onChange={handleChange}>
                    <FormControlLabel value={"open"} control={<Radio />} label={"ShowTable"}  />
                    <FormControlLabel value={"hide"} control={<Radio />} label={"DisableShow"}  />
                </RadioGroup>
            </FormControl>
        </Fragment>
    )
}

export default Mui_Check1;
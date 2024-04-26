import * as React from "react";
import Typography from "@mui/material/Typography";

export default function Search() {
    const [search, setSearch] = React.useState("");
    return (
        <>
            <input
                style={{margin: "15px 0px"}}
                id="search"
                type="text"
                placeholder="Search for other users"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </>
    );
}

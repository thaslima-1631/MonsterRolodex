import { render,screen } from "@testing-library/react"
import SearchBox from "../../components/card-list/SearchBox"
import React from "react";

test("search box render",()=>{
    let searchString="";
    const setSearchString=(value)=>{
        searchString=value.toLowerCase();
    }
    render(<SearchBox searchString={setSearchString}/>);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('heading',{name:/Greetings/i})).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search Monsters/i))
    setSearchString("monster");
    expect(searchString).toBe("monster")
})



/* QUERRY METHODS 
     getByRole
     getByAltText
     getByText
     getByLabelText
     getByPlaceHolderText

*/

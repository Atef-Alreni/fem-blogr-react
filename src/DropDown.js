function DropDown({links}) {

    function DropDownItem({link}) {
        return (
            <button>{link}</button>
        );
    }

    return (
        <div className="dropdown">
            {
                links.map( link => <DropDownItem link={link} /> )
            }
        </div>
    );
}

export default DropDown; 
 
function SideBar(){
    return (
        <div className="sideBar">
            <h3>items</h3>
            <div>
                <button>All</button>
                <button>Owner</button>
                <button>Dealer</button>
            </div>
            <div>
                <input type="checkbox" name="Search titles only" id=""/>
                <p>Search titles only</p>
                <input type="checkbox" name="Has Image" id="" />
                <p>Has Image</p>
                <input type="checkbox" name="Posted today" id="" />
                <p>Posted today</p>
                <input type="checkbox"  name="Bundle Duplicates" id="" />
                <p>Bundle Duplicates</p>
                <input type="checkbox"  name="Include nearby areas" id="" />
                <p>Include nearby areas</p>
            </div>
        </div>
    )
}

export default SideBar
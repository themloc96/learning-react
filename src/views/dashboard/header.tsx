interface myHeader {
    activeTab: string;
    handleActive: (e: any) => void
    handleSearch: (e: any) => void
}

const Header = ({ activeTab, handleActive, handleSearch}: myHeader) => {

    const activeClass = (tabName: string, activeTab: string) => {
        if (tabName !== activeTab) return ''

        return 'active-tab-selector'
    }

    return (
        <>
            <div className="tabs-heading mb-5">
                <div className="d-flex">
                    <div className="tabs">
                        <div role="tablist" className="tab-selectors js-tab-selectors btn-item">
                            <button onClick={handleActive} className={`tab-items ${activeClass('All', activeTab)}`} type="button">
                                All
                            </button>
                            <button onClick={handleActive} className={`tab-items ${activeClass('Active', activeTab)}`} type="button">
                                Active
                            </button>
                            <button onClick={handleActive} className={`tab-items ${activeClass('Inactive', activeTab)}`} type="button">
                                Inactive
                            </button>
                        </div>
                    </div>
                    <div className="v2-dropdown">
                        <div className="dropbtn v2-btn-default --icon-r">
                            Basic
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.5 6.5L8 3L11.5 6.5" stroke="#595F6B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/> <path d="M4.5 9.5L8 13L11.5 9.5" stroke="#595F6B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                        </div>
                        <div className="v2-dropdown__menu scrolls">
                            <ul>
                                <li className="items ">
                                    <div className="txt-ellipsis">Basic</div>
                                </li>
                                <li className="items ">
                                    <div className="txt-ellipsis">Basic</div>
                                </li>
                                <li className="items ">
                                    <div className="txt-ellipsis">Basic</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="search-input">
                    <input onChange={handleSearch} type="text" id="search-input" name="" placeholder="Search" />
                    <span className="svg-search-absolute">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5Z" stroke="#4D5054" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 9.5C10.6193 9.5 9.5 10.6193 9.5 12" stroke="#4D5054" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16.25 16.25L17.75 17.75" stroke="#4D5054" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/> </svg> 
                </span>
                </div>
            </div>
        </>
    )
}

export default Header
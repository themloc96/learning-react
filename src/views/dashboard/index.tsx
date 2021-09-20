import { ChangeEvent, useCallback, useMemo, useState } from "react";
import Detail from "./detail"
import Header from "./header"
import SVG from "./svg";
import { box__api, Details } from "../../apis/dashboard/boxs";
import { svg__api, Svgs } from "../../apis/dashboard/svgs";

// const myboxContents = box__api;
const mySvgs = svg__api;


const Index = () => {

    // const [boxContents, setboxContents] = useState(myboxContents)
    const [boxes, setBoxes] = useState(box__api);
    // const [_, setBoxesFilterd] = useState(box__api)
    const [filter, setFilter] = useState('All')
    const [searchValue, setSearchValue] = useState('')

    const handleCheck = useCallback((id) => {
        // useCallback khi function duoc goi, thi cpn chi render 1 lan va sao do luu vao trong cache, neu function dc goi 2 thi load data tu cache
        const box = boxes.find(x => x.boxID === id)
        
        if (!box) return;

        box.isActive = !box.isActive

        const newBoxes = [...boxes]

        for (let i = 0; i < newBoxes.length; i++) {
            if (newBoxes[i].boxID === box.boxID) newBoxes[i] = box
        }

        setBoxes(newBoxes)
    }, [boxes])

    const handleFilterChange = (e: ChangeEvent<{ textContent: 'All' }>) => setFilter(e.target.textContent)

    // useEffect(() => {
    //     // useEffect khi function duoc goi, lang ngh su kien
    //     setBoxesFilterd(boxes)
    // }, [filter, boxes])

    // const filterBoxes = () => {
    //     if (filter === 'All') return setBoxesFilterd(boxes)
    //     if (filter === 'Active') return setBoxesFilterd(boxes.filter(x => x.isActive === true))
    //     if (filter === 'Inactive') setBoxesFilterd(boxes.filter(x => x.isActive === false))
    // }

    const handleSearch = (e: any) => {
        // if (e.target.value !== '') setSearchValue(e.target.value)
        setSearchValue(e.target.value)
    }

    const filteredBoxes = useMemo(() => {
        let boxesAfterFilter: Details[] = []
        // useMemo khi function duoc goi, se luu value ( state ) vao cache

        if (filter === 'All') {
            boxesAfterFilter = boxes
        }
        else if (filter === 'Active') {
            boxesAfterFilter = boxes.filter(x => x.isActive === true)
        } else if (filter === 'Inactive') {
            boxesAfterFilter = boxes.filter(x => x.isActive === false)
        }

        return boxesAfterFilter.filter(x => x.title.includes(searchValue))

    }, [searchValue, filter, boxes])

    return (
        <>
            <Header handleActive={handleFilterChange} activeTab={filter} handleSearch={handleSearch}/>
            <div className="scrolls">
                <div className="tab-contents">
                    <div className="tab-content-active">
                        {filteredBoxes.map((boxContent: Details) =>
                            <div key={boxContent.boxID}>
                                <Detail
                                    boxID={boxContent.boxID}
                                    title={boxContent.title}
                                    desc={boxContent.desc}
                                    isActive={boxContent.isActive}
                                    onChecked={() => handleCheck(boxContent.boxID)}
                                    
                                    svg = {mySvgs.map((svg: Svgs) =>
                                        svg.svgID === boxContent.boxID &&
                                            <SVG key={svg.svgID}
                                                svgID={svg.svgID}
                                                name={svg.svgID}
                                                fill1={svg.fill1}
                                                path1={svg.path1}
                                                fill2={svg.fill2}
                                                path2={svg.path2}
                                                fill3={svg.fill3}
                                                path3={svg.path3}
                                                width={svg.width}
                                                height={svg.height}
                                            />
                                        )
                                    }                   
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
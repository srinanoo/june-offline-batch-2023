import { useEffect, useState } from "react"

export default function FnAPIComponent() {
    const [country, setCountry] = useState("india");
    const [universitiesList, setUniversitiesList] = useState([]);

    // useEffect(() => {
    //     if(country.length >= 5) {
    //         fetch(`http://universities.hipolabs.com/search?country=${country}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log(data);
    //                 let temp = [];
    //                 for(let i = 0; i < 10; i++) {
    //                     temp.push(data[i]);
    //                 }
    //                 if(universitiesList !== temp)
    //                     setUniversitiesList(temp);
    //             });
    //     }
    // }, [country]);

    useEffect(() => {
        fetchData();
    }, [country]);

    async function fetchData() {
        if(country.length >= 5) {
            let res = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
            let data = await res.json();
            let temp = [];
            for(let i = 0; i < 10; i++) {
                temp.push(data[i]);
            }
            if(universitiesList !== temp)
                setUniversitiesList(temp);
        }
    }

    return (
        <>
            <h1>Universities List - {country}</h1>

            <p><input type="text" onChange={(e) => setCountry(e.target.value)} /></p>
            <div>
                {
                    universitiesList?.map((v, i) => {
                        return (
                            <div key={i}>
                                <p>Name: {v?.name}</p>
                                <p>Domain: {v?.web_pages[0]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {ApiPage, Pages} from "../types";


const Page: React.FC = () => {

    const {id} = useParams()
    const [page, setPage] = useState<Pages[]>([])

    const fetchData = useCallback( async () => {
        try {
            const {data} = await axiosApi.get<ApiPage | null>('/pages.json');

            if (data === null) {
                setPage([])
            } else {
                const allPages = Object.keys(data).map((id) => ({
                    ...data[id],
                    id
                }));

                setPage(allPages)
            }
        } catch (e) {
            console.error('Get Page', e)
        }
    }, []);

    useEffect(() => {
        void fetchData()
    }, [fetchData]);

    const drawPage = page.find((getPage) => getPage.name === id)

    console.log(page);
    console.log(id);

    return (
        <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            <h1>{drawPage?.name}</h1>
            <h3>{drawPage?.title}</h3>
            <h6>{drawPage?.text}</h6>
        </div>
    );
};

export default Page;
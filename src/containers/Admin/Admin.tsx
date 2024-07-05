import {useCallback, useEffect, useState} from "react";
import axiosApi from "../../axiosApi";
import {ApiPage, Pages} from "../types";

const Admin = () => {

    const [pages, setPages] = useState<Pages[]>([]);

    const getPages = useCallback(async () => {
        try {
            const {data} = await axiosApi.get<ApiPage | null>('/pages.json');

            if (data === null) {
                setPages([])
            } else {
                const response = Object.keys(data).map((id) => ({
                    ...data[id],
                    id
                }));

                setPages(response)
            }

        } catch (e) {
            console.error('Some error', e)
        }
    }, [])

    useEffect(() => {
        void getPages()
    }, [getPages]);

    console.log(pages);

    return (
        <div style={{marginTop: '10px'}}>
                <h4>Edit Page</h4>

        </div>
    );
};

export default Admin;
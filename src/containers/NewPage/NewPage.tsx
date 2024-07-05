import {Grid, TextField} from "@mui/material";
import React, {useState} from "react";
import {PageForm} from "../types";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";

const NewPage = () => {
    const [postPage, setPostPage] = useState<PageForm[]>([]);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setPostPage((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            await axiosApi.post<PageForm>('/pages.json', postPage)
        } catch (e) {
            console.error('On Submit', e)
        }
        navigate('/')
    }

    return (
        <Grid component="form" onSubmit={onSubmit} sx={{display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
            <Grid item>
                <TextField id="name" name="name" onChange={handleChange} required label="Page name" variant="outlined" />
            </Grid>
            <Grid item>
                <TextField id="title" name="title" onChange={handleChange} required label="Title" variant="outlined" />
            </Grid>
            <Grid item>
                <TextField id="text" name="text" onChange={handleChange} required label="Content" variant="outlined" />
            </Grid>
            <Grid item>
                <button type="submit">Save</button>
            </Grid>
        </Grid>
    );
};

export default NewPage;
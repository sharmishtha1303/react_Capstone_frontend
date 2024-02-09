import axios from "axios";
const backendUrl = `${process.env.REACT_APP_BACKEND_URL}/job`;

export const getAllJobs = async ({ skills, title }) => {
    try {
        debugger;
        const reqUrl = `${backendUrl}/all?skills=${skills}&title=${title}`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        // toast with custom message for clients
    }
};

export const getJobDetails = async (jobId) => {
    try {
        const reqUrl = `${backendUrl}/job-description/${jobId}`;
        const response = await axios.get(reqUrl);
        return response.data?.data;
    } catch (error) {
        console.log(error);
        // toast with custom message for clients
    }
};
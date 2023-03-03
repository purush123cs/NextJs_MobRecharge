import axios from 'axios';

export async function getDenominationsData(mobileNumber: string) {
    const axiosResponse = await axios.get('http://localhost:5000/denominations');
    const denominationResponse = axiosResponse.data;

    return denominationResponse;
}
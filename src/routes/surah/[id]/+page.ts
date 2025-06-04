import axios from 'axios';

export async function load({params}) {
    try {
        const surah = await axios.get(`https://equran.id/api/v2/surat/${params.id}`)

        return { surah : surah.data.data }
    } catch (error) {
        console.error(error);
    }
}
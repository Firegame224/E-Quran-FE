import axios from "axios";

export async function load() {
    try {
        const Quran = await axios.get("https://equran.id/api/v2/surat" ,);

        return {Quran : Quran.data.data };
    } catch (error) {
        console.error(error);
    }
}
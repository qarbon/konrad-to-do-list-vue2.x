import fakeApi from "@/api/fakeApi";

const callApi = async (path, data) => {
    // TODO add axios and configure comunication
    try {
        return fakeApi(path, data)
    } catch (e) {
        console.log('error', { e })
    }
}

export default callApi;

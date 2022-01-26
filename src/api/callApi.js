import fakeApi from '@/api/fakeApi';

const callApi = async (path, data) => {
  // TODO add axios and configure comunication
  try {
    return fakeApi(path, data);
  } catch (e) {
    return { success: false, e };
  }
};

export default callApi;

const getQuestionsList = async () => {
  try {
    const response = await fetch('https://api.stackexchange.com/2.2/questions?((&site=stackoverflow&order=desc&sort=activity&tagged=react-native&filter=default',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    // in case of error data = {error : message}
    throw data;
  } catch (e) {
    // propagate error to be handled by saga.
    throw e;
  }
};
export default getQuestionsList;

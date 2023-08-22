async function getResourses(url) {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetc h ${url}, status:${red.status}`);
    }
    return await res.json();
  }

const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

export {getResourses};
export {postData};
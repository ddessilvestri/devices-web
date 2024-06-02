const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = async ( endpoint,data,method='GET' )=> {
    const url = `${baseUrl}/${endpoint}`
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: method !== 'GET' ? JSON.stringify(data) : undefined
        }

        const resp = await fetch(url, options);
        const json = await resp.json();
        return json;

    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }

}


export const fetchWithToken = async ( endpoint,data,method='GET' )=> {
    const url = `${baseUrl}/${endpoint}`
    const token = localStorage.getItem('token') || undefined;
   

    if (method === 'GET'){
        const resp = await fetch(url,{
            headers:{
                'x-token':token
            }
        });
        return await resp.json();
    }else{
        const resp = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json',
                'x-token':token
            },
            body: JSON.stringify(data)
        });

        return await resp.json();
    }
}
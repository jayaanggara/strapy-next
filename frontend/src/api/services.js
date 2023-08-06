import api from '.'

const ENDPOINT = {
    ACCOUNT: '/accounts',
    LINKS: '/links'
}

const getAllAccount = async () => {
    try{
        const accounts = await api.get(ENDPOINT.ACCOUNT);
        return accounts;    
    } catch (err) {
        throw Error(err);
    }
}

const getSelectedAccount = async (slug) => {
    try {
        const selectedAccount = await api.get(`${ENDPOINT.ACCOUNT}?filters[slug][$eqi]=${slug}&populate[links][populate]=*&populate[image]=*`);
        console.log(selectedAccount);
        return selectedAccount
    } catch (error) {
        throw Error(error)
    }
}

export {getAllAccount, getSelectedAccount}
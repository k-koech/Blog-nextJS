import useSWR from 'swr';

const response = (...args) => fetch(...args).then(res => res.json())
// const baseURL = "http://127.0.0.1:3000/"

const baseURL ="https://blog-next-js-kappa-ruby.vercel.app/"
// baseURL + 

export default function Fetcher(endpoint)
{
    const {data, error} = useSWR(baseURL+endpoint, response)
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}